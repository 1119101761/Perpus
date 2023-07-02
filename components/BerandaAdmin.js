import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';

export default function AdminPage() {
  const [Roti, setRoti] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    getRoti();
  }, []);

  const getRoti = () => {
    fetch('http://192.168.1.7:3000/Roti')
      .then((response) => response.json())
      .then((data) => {
        setRoti(data);
      })
      .catch((error) => {
        console.error('Failed to get Roti', error);
      });
  };

  const addBook = () => {
    fetch('http://192.168.1.7:3000/Roti', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        author: author,
        description: description,
        price: price,
        quantity: quantity
      }),
    })
      .then(() => {
        setTitle('');
        setAuthor('');
        setDescription('');
        setPrice('');
        setQuantity('');
        getRoti();
      })
      .catch((error) => {
        console.error('Failed to add book', error);
      });
  };

  const deleteBook = (bookId) => {
    fetch(`http://192.168.1.7:3000/Roti/${bookId}`, {
      method: 'DELETE',
    })
      .then(() => {
        getRoti();
      })
      .catch((error) => {
        console.error('Failed to delete book', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Author"
          value={author}
          onChangeText={(text) => setAuthor(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={(text) => setPrice(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Quantity"
          value={quantity}
          onChangeText={(text) => setQuantity(text)}
          keyboardType="numeric"
        />
        <Button
          title="Add Book"
          onPress={addBook}
        />
      </View>
      <FlatList
        data={Roti}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.bookAuthor}>{item.author}</Text>
              <Text style={styles.bookDescription}>{item.description}</Text>
              <Text style={styles.bookPrice}>Harga: Rp {item.price}</Text>
              <Text style={styles.bookQuantity}>Stok: {item.quantity}</Text>
            </View>
            <Button
              title="Delete"
              onPress={() => deleteBook(item._id)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  bookItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  bookInfo: {
    flex: 1,
    marginRight: 10,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 16,
  },
  bookDescription: {
    marginTop: 5,
  },
  bookPrice: {
    marginTop: 5,
  },
  bookQuantity: {
    marginTop: 5,
  },
});
