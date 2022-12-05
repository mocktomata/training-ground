/**
 * Now you know we are going to kidnap a cat.
 *
 * The next step is to figure out the breed of that cat do we want to kidnap.
 *
 * You will get that information from https://api.thecatapi.com/v1/breeds.
 *
 * For this job, you are going to use the `fetch()` function to access the API.
 * It is available in NodeJS starting 17.5.
 * If you don't have that, you can install the `node-fetch` or `cross-fetch` package.
 *
 * Since we are the Evil Empire,
 * we want to avoid calling `api.thecatapi.com` as much as possible.
 *
 * Also, who knows when will they change their result?
 *
 * So we will use `mocktomata` to capture the result.
 */
import { expect, it } from '@jest/globals'
import { mockto } from 'mocktomata'

/**
 * TODO: use `mockto()` to write the test
 * You can use `find kidnap worthy breed` or something similar as the `specName`.
 *
 * You can check the following links to learn how to use the cat API:
 *
 * - https://documenter.getpostman.com/view/5578104/RWgqUxxh#19c0515e-27da-415a-b844-bc7fe37d038c
 * - https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=s7StySvTw
 *
 * I want you to find a cat breed that has the following properties:
 * - intelligence <= 3 (dumb cat is cute cat)
 * - hairless = true (evil cat is hairless cat)
 * - rare = true (rare cat is expensive cat)
 *
 * You can use the `page` to look through the list.
 * Keep `limit` to `10` to avoid too much data.
 *
 * The test should pass only if you have found such breed.
 *
 * Remember to `await spec.done()` at the end of the test.
 */

mockto('find kidnap worthy breed', (/* ... */) => {
  /* start your test here */

  /* Use `spec` and `fetch()` to get value from 'https://api.thecatapi.com/v1/breeds?limit=10&page=2' */
})
