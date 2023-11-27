<template>
  <v-navigation-drawer permanent>
    <v-list>
      <v-list-item title="All" value="all" to="/products"></v-list-item>

      <v-list-group
        v-for="{title: productTitle, id: productId} in products"
        :key="productTitle"
        :value="productId"
      >
        <template v-slot:activator="{props}">
          <v-list-item
            v-bind="props"
            :title="productTitle"
          ></v-list-item>
        </template>

        <v-list-item title="ALL" :value="`${productId}_all`" :to="`/products/${productId}/components`"></v-list-item>

        <v-list-item
          v-for="{title: componentTitle, id: componentId} in filterComponentByProduct(productId)"
          :key="componentTitle"
          :title="componentTitle"
          :value="componentId"
          :to="`/products/${productId}/components/${componentId}`"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
const {products: {value: products}} = useProducts();
const {components: {value: components}} = useComponents();

const filterComponentByProduct = (productId) => {
  return components.filter(v => v.productId === productId);
};
</script>

<style>
</style>
