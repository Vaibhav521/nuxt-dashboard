<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Mobile Menu Overlay -->
    <div v-if="isMobileMenuOpen" 
         class="fixed inset-0 bg-gray-800/50 z-40 lg:hidden"
         @click="isMobileMenuOpen = false">
    </div>

    <!-- Sidebar -->
    <aside :class="`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`">
      <!-- Sidebar Header -->
      <div class="h-16 flex items-center justify-between px-4 border-b border-gray-200">
        <h1 class="text-xl font-bold text-gray-800">Dashboard</h1>
        <button @click="isMobileMenuOpen = false" class="lg:hidden">
          <svg class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Sidebar Navigation -->
      <nav class="p-4 space-y-1">
        <NuxtLink v-for="item in navigationItemsComputed" 
           :key="item.name"
           :href="item.href"
           :class="[
             item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
             'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
           ]">
          <component :is="item.icon" 
                    :class="[
                      item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    ]" />
          {{ item.name }}
        </NuxtLink>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="lg:pl-64">
      <!-- Top Header -->
      <header class="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div class="h-16 flex items-center justify-between px-4">
          <!-- Mobile menu button -->
          <button @click="isMobileMenuOpen = true" class="lg:hidden">
            <svg class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <!-- Header Right Side -->
          <div class="flex items-center space-x-4">
            <!-- Notification Bell -->
            <button class="text-gray-500 hover:text-gray-600">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            <!-- User Profile -->
            <button class="flex items-center text-sm">
              <img class="h-8 w-8 rounded-full" src="https://th.bing.com/th/id/OIP.wyqkY6RhmO3Po-pCmJj7JgHaHa?w=170&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="User avatar" />
            </button>
          </div>
        </div>
      </header>

      <!-- Main Content Area -->
      <main class="p-4">
        <!-- Page content will be rendered here -->
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const isMobileMenuOpen = ref(false);

const navigationItems = ref([
  { name: 'Dashboard', href: '/', icon: 'HomeIcon' },
  { name: 'Ticket', href: '/ticket', icon: 'TicketIcon' },
]);

const route = useRoute();

const navigationItemsComputed = computed(() => {
  const currentPath = route.path;
  return navigationItems.value.map(item => ({
    ...item,
    current: item.href === currentPath
  }));
});
</script>

