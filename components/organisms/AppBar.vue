<template>
  <v-app-bar elevation="1">
    <v-app-bar-title>Mock</v-app-bar-title>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn icon="mdi-account-circle" v-bind="props"></v-btn>
      </template>

      <v-list>
        <v-list-item>User Name</v-list-item>

        <v-divider></v-divider>

        <v-list-item title="setting" value="setting" to="/setting"></v-list-item>

        <v-divider></v-divider>

        <v-list-item title="logout" value="logout"></v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
