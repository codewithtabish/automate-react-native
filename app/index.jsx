import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'



const index = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        quibusdam tenetur autem quaerat nobis odio. Corporis odio tempore quas
        sapiente praesentium, repellat, libero deleniti dolorem ipsum suscipit
        aperiam perspiciatis enim? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Accusantium quibusdam tenetur autem quaerat nobis
        odio. Corporis odio tempore quas sapiente praesentium, repellat, libero
        deleniti dolorem ipsum suscipit aperiam perspiciatis enim? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Accusantium quibusdam
        tenetur autem quaerat nobis odio. Corporis odio tempore quas sapiente
        praesentium, repellat, libero deleniti dolorem ipsum suscipit aperiam
        perspiciatis enim?. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Commodi eius harum laborum nemo beatae fugit labore molestias
        maiores odit atque? Ea illum eaque vero, molestias nesciunt iusto quod
        accusamus repellendus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Commodi eius harum laborum nemo beatae fugit labore
        molestias maiores odit atque? Ea illum eaque vero, molestias nesciunt
        iusto quod accusamus repellendus.
      </Text>
      <Link href="/profile">Profile</Link>
    </View>
  );
}

export default index

const styles = StyleSheet.create({})