import React from 'react';
import { Text, ScrollView, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} 
          style={styles.profileImage} 
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>BUDGET</Text>
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Budget Cards */}
      <ScrollView>
        <View style={[styles.budgetCard, { backgroundColor: "#D1F4C7" }]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>House Bills</Text>
          </View>
          <Text style={styles.balanceText}>₹15,000</Text>
          <Text style={styles.infoText}>
            <MaterialIcons name="warning" size={16} color="red" /> Upcoming Electricity Bill 4,200 | View All
          </Text>
          <TouchableOpacity style={[styles.payButton, { backgroundColor: "#4CAF50" }]}>
            <Text style={styles.buttonText}>Pay from House Bills</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
        <View style={[styles.budgetCard2, { backgroundColor: "#CDEBFF" }]}>
        <View style={styles.cardHeader2}>
          <Text style={styles.cardTitle}>Grocery</Text>
          </View>
          <Text style={styles.balanceText}>₹5,000</Text>
          <Text style={styles.infoText}>Spent ₹40 on Zepto | View All</Text>
          <TouchableOpacity style={[styles.payButton, { backgroundColor: "#007BFF" }]}>
            <Text style={styles.buttonText2}>Pay from Grocery</Text>
          </TouchableOpacity>
        </View>
        
        <View style={[styles.budgetCard3, { backgroundColor: "#FFC4C4" }]}>
        <View style={styles.cardHeader3}>
          <Text style={styles.cardTitle}>Party</Text>
          </View>
          <Text style={styles.balanceText}>₹5,000</Text>
          <Text style={styles.infoText}>Spent ₹4,000 in Reflex Brewery & Pub | View All</Text>
          <TouchableOpacity style={[styles.payButton, { backgroundColor: "#FF5757" }]}>
            <Text style={styles.buttonText3}>Pay Now</Text>
          </TouchableOpacity>
        </View>
        
        </View>

        <View style={[styles.budgetCard4, { backgroundColor: "#FFE7A3" }]}>
        <View style={styles.cardHeader4}>
          <Text style={styles.cardTitle}>Vehicle</Text>
          </View>
          <Text style={styles.balanceText}>₹8,000</Text>
          <Text style={styles.infoText}>Spent ₹2000 on HP Petrol Station | View All</Text>
          <TouchableOpacity style={[styles.payButton, { backgroundColor: "#A07800" }]}>
            <Text style={styles.buttonText4}>Pay from Vehicle</Text>
          </TouchableOpacity>
        </View>

        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  row: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#007BFF',
    marginRight: 2,
  },
  dot: {
    width: 16,
    height: 16,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    marginTop: 2,
    marginLeft: 2,
  },
  budgetCard: {
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  budgetCard2: {
    width: '47%',
    borderRadius: 15,
    marginBottom: 15,
    marginRight: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  budgetCard4: {
    width: '47%',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  budgetCard3: {
    width: '47%',
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardHeader: {
    padding: 2,
    marginLeft: 10,
    marginTop: -13,
    width: '30%',
    backgroundColor: "#4CAF50",
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  cardHeader2: {
    padding: 2,
    marginLeft: 10,
    marginTop: -13,
    width: '50%',
    backgroundColor: "#007BFF",
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  cardHeader3: {
    padding: 2,
    marginLeft: 10,
    marginTop: -13,
    width: '50%',
    backgroundColor: "#FF5757",
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  cardHeader4: {
    padding: 2,
    marginLeft: 10,
    marginTop: -13,
    width: '50%',
    backgroundColor: "#A07800",
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'white',
    alignContent:'center',
  },
  balanceText: {
    marginLeft: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  infoText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  payButton: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding:10,
    marginTop: '20%',

  },
  buttonText: {
    color: '#14661f',
    fontWeight: 'bold',
  },
  buttonText2: {
    color: '#161a78',
    fontWeight: 'bold',
  },
  buttonText3: {
    color: '#820d07',
    fontWeight: 'bold',
  },
  buttonText4: {
    color: '#824007',
    fontWeight: 'bold',
  },
});

export default App;