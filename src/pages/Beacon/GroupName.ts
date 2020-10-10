import { uniqueNamesGenerator, Config, colors, animals } from 'unique-names-generator';

export function getGroupName(groupId: string) {
  return uniqueNamesGenerator({
    dictionaries: [colors, animals],
    separator: ' ',
    // Conver the group pub key (0xabcef) to a number. Note we have to cut it off, the number would be much too large.
    seed: parseInt(groupId.slice(0, 12), 16)
  });
}