const webpack = require('webpack');

// Get rid of craco once we found other solutions for these issues.

module.exports = function({ env }) {
    return {
        webpack: {
            plugins: [
                // This is so the bcrypto dependency does not crash on older Safari versions where BigInt is
                // not supported (pre iOS 14 at least). Discussed here: https://github.com/ArkEcosystem/core/issues/3423
                // The crucial point is in this file:
                //   https://github.com/bcoin-org/bcoin/blob/master/node_modules/bcrypto/lib/bn.js
                // (which gets pulled in for example via `bcoin/lib/protocol/networks.js`).
                //
                // Possible other solutions to the issue:
                // - Figure out why is not the "browser:" instructions in bcrypto's `package.json` are not used.
                // - yarn resolutions (I failed to make this work; additionally there is also the issue of there
                //   being at least two copies of bcrypto in the dependency tree. I did not get yarn to remove the
                //   second copy of bcrypto, despite the dependency resolution algo claiming they should all be hoisted
                //   to a single to-level copy. yarn might have a bug here, leaving a second copy around. npm does not
                //   do this).
                // - eject instead of craco.

                //
                // Defining the NODE_BACKEND is optional.
                //
                // new webpack.DefinePlugin({
                //     "process.env.NODE_BACKEND": '"js"',
                // }),
                new webpack.IgnorePlugin({
                    resourceRegExp: /native\/bn/,
                    contextRegExp: /bcrypto/
                })
            ],
        }
    };
}
