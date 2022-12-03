/**
 * Today is your first day joining the Evil Empire, fresh meat.
 *
 * There are many evil jobs ahead of you.
 *
 * But first, you need to know what our next job is.
 *
 * We used to have the job ready for you.
 * But some monkeys mess around our system so the `ourNextEvilJob()` function
 * has some weird jobs added to it.
 *
 * Luckily, we have a test to check the correct behavior.
 * You know, to run a successful evil empire,
 * we must plan and test our plan to make sure they work.
 *
 * Oh wait, the monkeys messed up our test too!
 * Right now the test will pass some times, but not others.
 *
 * But that's ok. We used `mocktomata` to saved the test result.
 * It works with many code out of the box.
 *
 * Including a simple function like the `ourNextEvilJob()`.
 * Here, we are using `mockto()` to write our test.
 *
 * Let's take a look at how to fix the test.
 */
import { test, expect } from '@jest/globals'
import { mockto } from 'mocktomata'

function ourNextEvilJob() {
  const rand = Math.random()
  switch (true) {
    case rand < 0.3: return 'world domination'
    case rand < 0.7: return 'destory the Earth'
    default: return 'kidnap a cat'
  }
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
 * `mockto()` will replay the behavior that we saved in the past and make the test always pass.
 */
mockto('get our next evil job', (specName, spec) => {
  test(specName, async () => {
    const motto = ourNextEvilJob()
    expect(motto).toEqual('kidnap a cat')
    await spec.done()
  })
})
