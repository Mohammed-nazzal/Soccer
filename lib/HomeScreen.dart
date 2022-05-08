import 'package:flutter/material.dart';
import 'package:sportsapp/FixtureScreen.dart';
import 'package:sportsapp/MainScreen.dart';
import 'package:sportsapp/ProfileScreen.dart';
import 'package:sportsapp/Teams.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _selectedIndex = 0;
  List<Widget> _widgetOptions = <Widget>[
    MainScreen(),
    FixtureScreen(),
    ProfileScreen(),
    Teams(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) => Scaffold(
    body: _widgetOptions.elementAt(_selectedIndex),
    backgroundColor: Colors.green,
    bottomNavigationBar: BottomNavigationBar(
      backgroundColor: Colors.grey[800],
      items: const <BottomNavigationBarItem>[
        BottomNavigationBarItem(
          backgroundColor: Colors.black54,
          icon: Icon(Icons.home),
          label: 'Home',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.calendar_today),
          label: 'Fixtures',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.person),
          label: 'Players',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.art_track),
          label: 'Teams',
        ),
      ],
      currentIndex: _selectedIndex,
      selectedItemColor: Colors.amber,
      onTap: _onItemTapped,
    ),
  );
}
