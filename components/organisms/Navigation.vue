<template>
  <v-navigation-drawer
    theme="light"
    rail
    permanent
  >
    <v-list nav>
      <v-list-item prepend-icon="mdi-home" value="home" to="/"></v-list-item>

      <v-list-item prepend-icon="mdi-folder-multiple" value="folder" to="/products"></v-list-item>

      <v-list-item prepend-icon="mdi-chart-line" value="chart" to="/chart"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
