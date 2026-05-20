import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function DashboardScreen() {
  const [deliveries] = useState(128);
  const [pod] = useState(112);
  const [attendance] = useState(48);
  const [salary] = useState('₱12K');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CP-SIOCON</Text>
        <Text style={styles.subtitle}>Real-Time Logistics Dashboard</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Deliveries</Text>
          <Text style={styles.cardValue}>{deliveries}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>POD</Text>
          <Text style={styles.cardValue}>{pod}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Attendance</Text>
          <Text style={styles.cardValue}>{attendance}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Payslip</Text>
          <Text style={styles.cardValue}>{salary}</Text>
        </View>
      </View>

      <View style={styles.liveContainer}>
        <Text style={styles.sectionTitle}>Live Employee Status</Text>

        <View style={styles.liveCard}>
          <Text style={styles.employee}>Juan Dela Cruz</Text>
          <Text style={styles.online}>● On Delivery</Text>
        </View>

        <View style={styles.liveCard}>
          <Text style={styles.employee}>Mark Reyes</Text>
          <Text style={styles.pending}>● Pending POD</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

function DeliveriesScreen() {
  const [data] = useState([
    { id: '1', rider: 'Juan Dela Cruz', status: 'Delivered', location: 'Siocon' },
    { id: '2', rider: 'Mark Reyes', status: 'In Transit', location: 'Baliguian' },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Deliveries</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.deliveryCard}>
            <Text style={styles.employee}>{item.rider}</Text>
            <Text>📍 {item.location}</Text>
            <Text style={styles.online}>{item.status}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

function PODScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>POD Uploads</Text>

      <View style={styles.deliveryCard}>
        <Text style={styles.employee}>Upload Proof of Delivery</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function AttendanceScreen() {
  const [employees] = useState([
    { id: '1', name: 'Juan Dela Cruz', timeIn: '7:02 AM', status: 'Present' },
    { id: '2', name: 'Mark Reyes', timeIn: '7:18 AM', status: 'Late' },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Attendance</Text>

      <FlatList
        data={employees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.attendanceCard}>
            <Text style={styles.employee}>{item.name}</Text>
            <Text>Time In: {item.timeIn}</Text>
            <Text style={item.status === 'Present' ? styles.present : styles.late}>{item.status}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

function PayslipScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Payslip Summary</Text>
      <View style={styles.deliveryCard}>
        <Text style={styles.employee}>Juan Dela Cruz</Text>
        <Text>Salary: ₱12,000</Text>
        <Text>Incentives: ₱2,000</Text>
        <Text>Deductions: ₱500</Text>
        <Text style={styles.online}>Net Pay: ₱13,500</Text>
      </View>
    </SafeAreaView>
  );
}

function ProfileScreen() {
  const [name, setName] = useState('Juan Dela Cruz');
  const [phone, setPhone] = useState('09123456789');
  const [area, setArea] = useState('Siocon');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Profile</Text>
      <View style={styles.profileContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>

        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Full Name" />
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Phone Number" />
        <TextInput style={styles.input} value={area} onChangeText={setArea} placeholder="Assigned Area" />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Deliveries" component={DeliveriesScreen} />
        <Tab.Screen name="POD" component={PODScreen} />
        <Tab.Screen name="Attendance" component={AttendanceScreen} />
        <Tab.Screen name="Payslip" component={PayslipScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f9',
  },
  header: {
    backgroundColor: '#2563eb',
    padding: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: { fontSize: 28, fontWeight: 'bold', color: 'white' },
  subtitle: { color: 'white', marginTop: 5 },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  card: {
    backgroundColor: 'white',
    width: '42%',
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
    elevation: 4,
  },
  cardTitle: { color: '#6b7280' },
  cardValue: { fontSize: 28, fontWeight: 'bold', marginTop: 10 },
  pageTitle: { fontSize: 28, fontWeight: 'bold', padding: 20 },
  deliveryCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 20,
    borderRadius: 20,
    elevation: 3,
  },
  attendanceCard: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 20,
    borderRadius: 20,
    elevation: 3,
  },
  employee: { fontSize: 18, fontWeight: 'bold' },
  online: { marginTop: 10, color: 'green', fontWeight: 'bold' },
  pending: { marginTop: 10, color: 'orange', fontWeight: 'bold' },
  present: { marginTop: 10, color: 'green', fontWeight: 'bold' },
  late: { marginTop: 10, color: 'red', fontWeight: 'bold' },
  button: { backgroundColor: '#2563eb', padding: 15, borderRadius: 15, marginTop: 20 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
  profileContainer: { padding: 20 },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  avatarText: { fontSize: 40 },
  input: { backgroundColor: 'white', padding: 15, borderRadius: 15, marginBottom: 15 },
  liveContainer: { padding: 20 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  liveCard: { backgroundColor: 'white', padding: 20, borderRadius: 20, marginBottom: 15 },
});
