/**
 * Today is your first day joining the Evil Empire, fresh meat.
 *
 * There are many evil jobs ahead of you.
 *
 * But first, you need to know what our next job is.
 *
 * We have the job ready for you.
 * But some monkeys mess around our system so the `ourNextEvilJob()` function
 * is returning the wrong result.
 *
 * While we can fix the function,
 * we can't do it right now because we need to get the fingerprints
 * on the function to find out which monkey did that so that
 * we can take the banana out of its hand.
 *
 * Luckily, we have a test to check the correct behavior.
 * You know, to run a successful evil empire,
 * we must plan and test our plan to make sure they work.
 *
 * Oh wait, the monkey messed up our test too!
 *
 * But that's ok. We used `mocktomata` to saved the test result.
 *
 * Here, we use `mockto()` to write our test.
 *
 * Let's take a look at how to fix it.
 */
import { test, expect } from '@jest/globals'
import { mockto } from 'mocktomata'

// Can't change this right now!!!
function ourNextEvilJob() {
  return 'world domination'
}

/**
 * You can see `mockto()` will ask for a `specName`.
 * In this case, it's `get our next evil job`.
 *
 * This is passed into the handling function,
 * so we can pass it to the `test()` function so that
 * it is also used as the test description.
 *
 * To fix the test, we need to use the `spec()` function to create
 * a "speced" version of the `ourNextEvilJob()` function and call it.
 *
 * Because we already have a saved `SpecRecord`,
 * `mockto()` will replay the behavior and pass the test.
 */
mockto('get our next evil job', (specName, spec) => {
  test(specName, async () => {
    const motto = ourNextEvilJob()
    expect(motto).toEqual(theNextEvilJob)
    await spec.done()
  })
})





























const theNextEvilJob = 'kidnap a cat'
