/**
 * See MinimumStakeSchedule.sol
 */


// 2 years in seconds (seconds per day * days in a year * years)
const schedule = 86400 * 365 * 2;
const steps = 10;
const base = 10000 * 1e18;

// 2020-04-28; the date of deploying KEEP token.
// TX:  0xea22d72bc7de4c82798df7194734024a1f2fd57b173d0e065864ff4e9d3dc014
const minimumStakeScheduleStart = 1588042366;


// The minimum stake is lowered periodically over the course of 2 years since the time
// of the schedule start and eventually ends at 10k KEEP.
export function calculateMinStake() {
  const now = Math.round(Date.now() / 1000);
  if (now < minimumStakeScheduleStart + schedule) {
    // https://ethereum.stackexchange.com/a/89818/64957
    const currentStep = Math.floor(steps * (now - minimumStakeScheduleStart) / schedule);
    return base * (steps - currentStep);
  }
  return base;
}
