<template>
  <div>
    <main id="page-content" class="flex max-w-full flex-auto flex-col">
      <!-- Page Heading -->
      <div class="container mx-auto px-4 pt-6 lg:px-8 lg:pt-8 xl:max-w-7xl">
        <div
          class="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-start"
        >
          <div class="grow">
            <h1 class="mb-1 text-xl font-bold">Dashboard</h1>
            <h2 class="text-sm font-medium text-neutral-500">
              Welcome, you have <strong>65 open tickets</strong> and
              <strong>0 notifications</strong>.
            </h2>
          </div>
          <div
            class="flex flex-none items-center justify-center gap-2 rounded sm:justify-end"
          >
            <div class="relative">
              <div
                class="pointer-events-none absolute inset-y-0 start-0 my-px ms-px flex w-10 items-center justify-center rounded-l-lg text-neutral-500"
              >
                <svg
                  class="hi-mini hi-magnifying-glass inline-block h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search everything.."
                class="block w-full rounded-lg border border-neutral-200 py-2 pe-3 ps-10 leading-6 placeholder-neutral-500"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- END Page Heading -->

      <!-- Page Section -->
      <div class="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
        <div
          class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          <!-- Quick Statistics -->
          <a
            href="javascript:void(0)"
            class="flex flex-col rounded-lg border border-neutral-200 bg-white hover:border-neutral-300 active:border-neutral-200"
          >
            <div class="flex grow items-center justify-between p-5">
              <dl>
                <dt class="text-2xl font-bold">65</dt>
                <dd class="text-sm font-medium text-neutral-500">
                  Open Tickets
                </dd>
              </dl>
              <div
                class="flex items-center text-sm font-medium text-emerald-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                  />
                </svg>
              </div>
            </div>
            <div
              class="flex justify-end border-t border-neutral-100 px-5 py-3 text-xs font-medium text-green-500"
            >
              Total
            </div>
          </a>
          <a
            href="javascript:void(0)"
            class="flex flex-col rounded-lg border border-neutral-200 bg-white hover:border-neutral-300 active:border-neutral-200"
          >
            <div class="flex grow items-center justify-between p-5">
              <dl>
                <dt class="text-2xl font-bold">28</dt>
                <dd class="text-sm font-medium text-neutral-500">
                  Reopen Tickets
                </dd>
              </dl>
              <div class="flex items-center text-sm font-medium text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                  />
                </svg>
              </div>
            </div>
            <div
              class="flex justify-end border-t border-neutral-100 px-5 py-3 text-xs font-medium text-neutral-500"
            >
            Last 30 days
          </div>
          </a>
          <a
            href="javascript:void(0)"
            class="flex flex-col rounded-lg border border-neutral-200 bg-white hover:border-neutral-300 active:border-neutral-200"
          >
            <div class="flex grow items-center justify-between p-5">
              <dl>
                <dt class="text-2xl font-bold">792</dt>
                <dd class="text-sm font-medium text-neutral-500">
                  Closed Tickets
                </dd>
              </dl>
              <div class="flex items-center text-sm font-medium text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
                  />
                </svg>
              </div>
            </div>
            <div
              class="flex justify-end border-t border-neutral-100 px-5 py-3 text-xs font-medium text-neutral-500"
            >
              Last 30 days
            </div>
          </a>
          <a
            href="javascript:void(0)"
            class="flex flex-col rounded-lg border border-neutral-200 bg-white hover:border-neutral-300 active:border-neutral-200"
          >
            <div class="flex grow items-center justify-between p-5">
              <dl>
                <dt class="text-2xl font-bold">777</dt>
                <dd class="text-sm font-medium text-neutral-500">
                  Total Tickets
                </dd>
              </dl>
              <div
                class="flex items-center text-sm font-medium text-emerald-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                  />
                </svg>
              </div>
            </div>
            <div
              class="flex justify-end border-t border-neutral-100 px-5 py-3 text-xs font-medium text-neutral-500"
            >
              All time
            </div>
          </a>
          <!-- END Quick Statistics -->

          <!-- Tickets -->
          <div
            class="flex flex-col rounded-lg border bg-white sm:col-span-2 lg:col-span-4"
          >
            <div
              class="flex flex-col items-center justify-between gap-4 border-b border-neutral-100 p-5 text-center sm:flex-row sm:text-start"
            >
              <div>
                <h2 class="mb-0.5 font-semibold">Recent tickets</h2>
                <h3 class="text-sm font-medium text-neutral-600">
                  It seems that we are receiving more tickets the last 30 days
                </h3>
              </div>
              <div>
                <NuxtLink
                  to="/ticket"
                  class="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200"
                >
                  View all tickets
                </NuxtLink>
              </div>
            </div>
          </div>
          <!-- END Tickets -->
        </div>
      </div>
      <!-- END Page Section -->
    </main>
    <dashboard-chart />
  </div>
</template>
  
  <script setup>
definePageMeta({
  layout: "sidebar-with-header",
});
import { ref } from "vue";
</script>
  

  