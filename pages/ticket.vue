<template>
  <div>
    
    <div
      class="flex flex-col sm:flex-row justify-between items-start sm:px-6 w-full mb-6 gap-2"
    >
      <div class="flex items-center w-full sm:w-1/2">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search tasks..."
          class="w-full p-2 border border-gray-300 rounded-lg shadow-sm"
        />
      </div>

      <div class="flex items-center w-full sm:w-1/2">
        <select
          v-model="selectedPriority"
          class="p-2 border border-gray-300 rounded-lg shadow-sm w-full"
        >
          <option value="">All Priorities</option>
          <option value="Urgent">Urgent</option>
          <option value="Normal">Normal</option>
        </select>
      </div>
    </div>

    <div class="sm:hidden grid grid-cols-1 gap-4">
      <div
        v-for="(task, index) in filteredTasks"
        :key="index"
        class="bg-white p-5 rounded-lg border"
      >
        <h3 class="text-lg font-semibold text-gray-800">{{ task.title }}</h3>
        <div
          class="flex justify-between items-center text-sm text-gray-600 mt-2"
        >
          <span
            :class="{
              'bg-red-100 text-red-800': task.priority === 'Urgent',
              'bg-yellow-100 text-yellow-800': task.priority === 'Normal',
            }"
            class="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium"
          >
            {{ task.priority }}
          </span>
          <span>{{ task.dueTime }}</span>
        </div>
        <p class="mt-3 text-gray-700 text-sm">{{ task.description }}</p>
        <div class="flex justify-end">
          <button
            @click="showModal(task)"
            class="mt-4 border text-black py-2 px-4 rounded-lg text-sm"
          >
            View Details
          </button>
        </div>
      </div>
    </div>

    <div class="hidden sm:block sm:px-6 w-full">
      <div class="mt-7 overflow-x-auto">
        <table class="w-full whitespace-nowrap">
          <tbody>
            <tr
              v-for="(task, index) in filteredTasks"
              :key="index"
              tabindex="0"
              class="focus:outline-none h-16 border border-gray-100 rounded-lg"
            >
              <td class="p-4 m-2">
                <div class="flex items-center pl-5">
                  <p
                    class="text-base font-medium leading-none text-gray-700 mr-2 p-2"
                  >
                    {{ task.title }}
                  </p>
                </div>
              </td>

              <td class="p-4 m-2">
                <div class="flex items-center pl-5">
                  <span
                    :class="{
                      'bg-red-100 text-red-800': task.priority === 'Urgent',
                      'bg-yellow-100 text-yellow-800':
                        task.priority === 'Normal',
                    }"
                    class="inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium"
                  >
                    {{ task.priority }}
                  </span>
                </div>
              </td>

              <td class="pl-5">
                <div class="flex items-center">
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
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                    />
                  </svg>
                  <p class="text-sm leading-none text-gray-600 ml-2">
                    {{ task.commentsCount }}
                  </p>
                </div>
              </td>

              <td class="pl-5">
                <div class="flex items-center">
                  <button
                    class="py-3 px-3 text-sm focus:outline-none leading-none rounded"
                  >
                    {{ task.dueTime }}
                  </button>
                </div>
              </td>

              <td class="pl-4">
                <div
                  class="flex items-center cursor-pointer"
                  @click="showModal(task)"
                >
                  <button
                    class="text-sm border leading-none text-gray-600 py-3 px-5 rounded focus:outline-none"
                  >
                    View
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <TicketModal
      :task="selectedTask"
      :isVisible="modalVisible"
      @close="closeModal"
    />
  </div>
</template>
  
  
<script setup>
import { ref, computed } from "vue";

definePageMeta({
  layout: "sidebar-with-header",
});

const tasks = ref([
  {
    title: "Marketing Keynote Presentation",
    priority: "Urgent",
    commentsCount: 23,
    dueTime: "Due today at 18:00",
    description:
      "This is a detailed description of the task. It will be a keynote presentation and should be done in powerpoint.",
    dueDate: "2025-01-19",
  },
  {
    title: "Product Launch Plan",
    priority: "Normal",
    commentsCount: 10,
    dueTime: "Due in 2 days at 10:00",
    description:
      "This is a detailed plan of the product launch. It should include marketing, sales, and product teams.",
    dueDate: "2025-01-21",
  },
  {
    title: "Quarterly Financial Report",
    priority: "Urgent",
    commentsCount: 5,
    dueTime: "Due tomorrow at 14:00",
    description:
      "This is a detailed report for the financial quarter. It should include profit and loss, balance sheet and cash flow.",
    dueDate: "2025-01-20",
  },
  {
    title: "Code Review",
    priority: "Normal",
    commentsCount: 10,
    dueTime: "Due in 2 days at 14:00",
    description:
      "This is a code review task. It should be done by the team lead.",
    dueDate: "2025-01-22",
  },
  {
    title: "Design Assets",
    priority: "Normal",
    commentsCount: 5,
    dueTime: "Due in 3 days at 16:00",
    description: "This is a task to create design assets for the website.",
    dueDate: "2025-01-23",
  },
  {
    title: "Website Redesign",
    priority: "Urgent",
    commentsCount: 10,
    dueTime: "Due in 4 days at 10:00",
    description:
      "This is a task to redesign the website. It should include a new layout and design.",
    dueDate: "2025-01-24",
  },
  {
    title: "Content Creation",
    priority: "Normal",
    commentsCount: 5,
    dueTime: "Due in 5 days at 10:00",
    description:
      "This is a task to create content for the website. It should include blog posts and articles.",
    dueDate: "2025-01-25",
  },
  {
    title: "SEO Audit",
    priority: "Urgent",
    commentsCount: 10,
    dueTime: "Due in 6 days at 14:00",
    description:
      "This is a task to do an SEO audit of the website. It should include a detailed report.",
    dueDate: "2025-01-26",
  },
  {
    title: "UX Research",
    priority: "Normal",
    commentsCount: 5,
    dueTime: "Due in 7 days at 14:00",
    description:
      "This is a task to do UX research on the website. It should include a detailed report.",
    dueDate: "2025-01-27",
  },
  {
    title: "Frontend Development",
    priority: "Urgent",
    commentsCount: 10,
    dueTime: "Due in 8 days at 10:00",
    description:
      "This is a task to do frontend development for the website. It should include a detailed report.",
    dueDate: "2025-01-28",
  },
  {
    title: "Backend Development",
    priority: "Normal",
    commentsCount: 5,
    dueTime: "Due in 9 days at 14:00",
    description:
      "This is a task to do backend development for the website. It should include a detailed report.",
    dueDate: "2025-01-29",
  },
  {
    title: "Testing",
    priority: "Urgent",
    commentsCount: 10,
    dueTime: "Due in 10 days at 10:00",
    description:
      "This is a task to test the website. It should include a detailed report.",
    dueDate: "2025-01-30",
  },
]);

const modalVisible = ref(false);
const selectedTask = ref(null);

const searchQuery = ref("");
const selectedPriority = ref("");

const showModal = (task) => {
  selectedTask.value = task;
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
  selectedTask.value = null;
};

const filteredTasks = computed(() => {
  return tasks.value.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());

    if (selectedPriority.value) {
      return task.priority === selectedPriority.value && matchesSearch;
    }

    return matchesSearch;
  });
});
</script>
  
