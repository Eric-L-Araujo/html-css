produto = {titulo: "iphone 15", preco: 5000}

// A desestruturação já foi feita aqui:
const { titulo, preco } = produto;

return (
  <View>
    {/* Complete a linha abaixo para mostrar o título */}
    <Text>Produto: {titulo} </Text>
    
    {/* Complete a linha abaixo para mostrar o preço */}
    <Text>Valor: R$ {preco} </Text>
  </View>
);