<template>
    <div
      v-if="isVisible"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start sm:items-center z-50 p-4"
    >
      <div
        class="bg-white rounded-lg shadow-xl w-full max-h-[90vh] overflow-y-auto transition-all transform scale-95 animate-modal sm:max-w-4xl"
      >
        <!-- Header -->
        <div class="sticky top-0 bg-white p-3 sm:p-4 border-b">
          <div class="flex items-center justify-between">
            <h2 class="text-lg sm:text-2xl font-semibold text-gray-800 line-clamp-1">{{ task.title }}</h2>
            <button
              class="text-gray-500 hover:text-gray-700 transition p-1"
              @click="closeModal"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Content -->
        <div class="p-3 sm:p-4 space-y-4">
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <!-- Left Column -->
            <div class="flex-1 bg-gray-50 p-3 rounded-lg shadow-sm">
              <div class="space-y-3">
                <div>
                  <p class="font-semibold text-gray-700">Description</p>
                  <p class="text-sm text-gray-600 mt-1">{{ task.description }}</p>
                </div>
                <div>
                  <p class="font-semibold text-gray-700">Due Date</p>
                  <p class="text-sm text-gray-600 mt-1">{{ task.dueDate }}</p>
                </div>
                <div>
                  <p class="font-semibold text-gray-700">Priority</p>
                  <p :class="priorityClass" class="text-sm mt-1">{{ task.priority }}</p>
                </div>
              </div>
            </div>
  
            <!-- Right Column -->
            <div class="flex-1 bg-gray-50 p-3 rounded-lg shadow-sm">
              <div class="space-y-3">
                <div>
                  <p class="font-semibold text-gray-700">Next Stage</p>
                  <p class="text-sm text-gray-600 mt-1">Review</p>
                </div>
                <div>
                  <p class="font-semibold text-gray-700">Assigned By</p>
                  <p class="text-sm text-gray-600 mt-1">John Doe</p>
                </div>
                <div>
                  <p class="font-semibold text-gray-700">Ticket ID</p>
                  <p class="text-sm text-gray-600 mt-1">#12345</p>
                </div>
                <div>
                  <p class="font-semibold text-gray-700">Created On</p>
                  <p class="text-sm text-gray-600 mt-1">2025-01-15</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Footer -->
        <div class="sticky bottom-0 bg-white p-3 sm:p-4 border-t">
          <div class="flex justify-end">
            <button
              @click="closeModal"
              class="border text-black py-1.5 px-4 rounded-lg transition hover:bg-gray-50"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, computed } from "vue";
  
  const props = defineProps({
    task: Object,
    isVisible: Boolean,
  });
  
  const emit = defineEmits(["close"]);
  
  const closeModal = () => {
    emit("close");
  };
  
  const priorityClass = computed(() => {
    if (props.task.priority === "Urgent") {
      return "text-red-600 font-semibold";
    } else if (props.task.priority === "Normal") {
      return "text-yellow-600 font-semibold";
    }
    return "text-gray-600";
  });
  </script>
  
  <style scoped>
  @keyframes modalFadeIn {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .animate-modal {
    animation: modalFadeIn 0.3s ease-out;
  }
  </style>