Search function
---------------

Entering an Ethereum address should offer deposit/operator/user search results.


Support for Notify in all stages
--------------------------------

The "Notify Timeout" button is currenlty hidden when `retrieveSignerKey()` needs to be called (should be brought back)
and is also not enabled during the withdrawal process.

FRT Tokens
----------

It would be nice to show who owns the FRT token for each deposit (if it should ever someone else than the depositor),
and in general layout more clearly who paid the fee to who in which case (the tbtc whitepaper contains a list of
possible scenarios)


Improved Staking Stats
----------------------

We do not handle all the events correctly in the graph, and global stats would be nice to have (pulling in the
remaining code from https://github.com/suntzu93/keepnetwork-subgraph)


Global / Operator Event Log
---------------------------

We have an event log on a per-deposit basis, but it would be interesting to show one globally (everything happening
in the system) or for each operator (staking & bonding history).


Live Updates
------------

We could try to use GraphQL subscriptions to make more part of the system self-update.
        

More Liquidation Details
------------------------

- When an auction is happening: Show the current price & button to buy.


Beacon Group Status
-------------------

Show which beacon groups are expired/terminated.


Browse by user
--------------

Currently, the user tab links to Etherscan. Make our own per-user page where you can see the user's actions.


a "what happens now info"
--------------------------

I would like to show, on top of the log, a info section "what happens next", which indicate the next step 
in the process.


Export GraphQL into Dolthub
---------------------------

An introspection query + loading all data from the graph into Dolthub might be nice to make sure as the graph code
changes, we do not introduce regressions, i.e. we could see a versioned history of the data. Not sure if this is 
worth it.


Tiny features
-------------

- An easier way to copy addresses.