import 'package:flutter/material.dart';

class TeamsProfilePage extends StatefulWidget {
  const TeamsProfilePage({key}) : super(key: key);

  @override
  _TeamsProfilePageState createState() => _TeamsProfilePageState();
}

class _TeamsProfilePageState extends State<TeamsProfilePage> {
  bool isPhoto = true;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: PreferredSize(
          child: getAppBar(), preferredSize: Size.fromHeight(180)),
      body: getBody(),
    );
  }

  Widget getAppBar() {
    return AppBar(
        elevation: 0,
        backgroundColor: Colors.black54,
        flexibleSpace: SafeArea(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  width: 75,
                  height: 75,
                  decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(28),
                      border: Border.all(color:Colors.black)),
                  child: Center(
                    child: Container(
                      width: 70,
                      height: 70,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(30),
                          image: DecorationImage(
                              image: NetworkImage(
                                  "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png"),
                              fit: BoxFit.cover)),
                    ),
                  ),
                ),
                SizedBox(
                  height: 10,
                ),
                Text(
                  "Real Madrid",
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                SizedBox(
                  height: 10,
                ),
                Text(
                  "",
                  style: TextStyle(fontSize: 15),
                ),
              ],
            )));
  }

  Widget getBody() {
    var size = MediaQuery.of(context).size;
    return SingleChildScrollView(
      child: Column(
        children: [
          SizedBox(
            height: 30,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Column(
                children: [
                  Text(
                    "Founded",
                    style: TextStyle(fontSize: 15, color: Colors.grey),
                  ),
                  SizedBox(
                    height: 8,
                  ),
                  Text(
                    "6 March 1902",
                    style: TextStyle(fontSize: 18,color: Colors.black, fontWeight: FontWeight.bold),
                  ),
                ],
              ),
              Column(
                children: [
                  Text(
                    "Capacity",
                    style: TextStyle(fontSize: 15, color: Colors.grey),
                  ),
                  SizedBox(
                    height: 8,
                  ),
                  Text(
                    "81,044",
                    style: TextStyle(fontSize: 18,color: Colors.black, fontWeight: FontWeight.bold),
                  ),
                ],
              ),
              Column(
                children: [
                  Text(
                    "President",
                    style: TextStyle(fontSize: 15, color: Colors.grey),
                  ),
                  SizedBox(
                    height: 8,
                  ),
                  Text(
                    "	Florentino",
                    style: TextStyle(fontSize: 18,color: Colors.black, fontWeight: FontWeight.bold),
                  ),
                ],
              )



            ],
          ),
          SizedBox(
            height: 50,
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Column(
                children: [
                  Text(
                    "League",
                    style: TextStyle(fontSize: 15, color: Colors.grey),
                  ),
                  SizedBox(
                    height: 8,
                  ),
                  Text(
                    "	La Liga",
                    style: TextStyle(fontSize: 18,color: Colors.black, fontWeight: FontWeight.bold),
                  ),
                ],
              ),
              Column(
                children: [
                  Text(
                    "Ground",
                    style: TextStyle(fontSize: 15, color: Colors.grey),
                  ),
                  SizedBox(
                    height: 8,
                  ),
                  Text(
                    "	Estadio",
                    style: TextStyle(fontSize: 18,color: Colors.black, fontWeight: FontWeight.bold),
                  ),
                ],
              ),
              Column(
                children: [
                  Text(
                    "stadium",
                    style: TextStyle(fontSize: 15, color: Colors.grey),
                  ),
                  SizedBox(
                    height: 8,
                  ),
                  Text(
                    "Santiago",
                    style: TextStyle(fontSize: 18,color: Colors.black, fontWeight: FontWeight.bold),
                  ),
                ],
              )



            ],
          ),


          SizedBox(
            height: 30,
          ),


        ],
      ),
    );
  }








}