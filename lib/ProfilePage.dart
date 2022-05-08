import 'package:flutter/material.dart';

class ProfilePage extends StatefulWidget {
  const ProfilePage({key}) : super(key: key);

  @override
  _ProfilePageState createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
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
                                  "https://th.bing.com/th/id/OIP.784bxylp1ISwJae03i5FZAHaIX?pid=ImgDet&rs=1"),
                              fit: BoxFit.cover)),
                    ),
                  ),
                ),
                SizedBox(
                  height: 10,
                ),
                Text(
                  "Lionel Messi",
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                SizedBox(
                  height: 10,
                ),
                Text(
                  "Barcelona",
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
                    "Team",
                    style: TextStyle(fontSize: 15, color: Colors.grey),
                  ),
                  SizedBox(
                    height: 8,
                  ),
                  Text(
                    "Barcelona",
                    style: TextStyle(fontSize: 18,color: Colors.black, fontWeight: FontWeight.bold),
                  ),
                ],
              ),
              Column(
                children: [
                  Text(
                    "Age",
                    style: TextStyle(fontSize: 15, color: Colors.grey),
                  ),
                  SizedBox(
                    height: 8,
                  ),
                  Text(
                    "33 years",
                    style: TextStyle(fontSize: 18,color: Colors.black, fontWeight: FontWeight.bold),
                  ),
                ],
              ),
              Column(
                children: [
                  Text(
                    "Nationality",
                    style: TextStyle(fontSize: 15, color: Colors.grey),
                  ),
                  SizedBox(
                    height: 8,
                  ),
                  Text(
                    "Argentina",
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
                    "Weight",
                    style: TextStyle(fontSize: 15, color: Colors.grey),
                  ),
                  SizedBox(
                    height: 8,
                  ),
                  Text(
                    "72 kg",
                    style: TextStyle(fontSize: 18,color: Colors.black, fontWeight: FontWeight.bold),
                  ),
                ],
              ),
              Column(
                children: [
                  Text(
                    "Shirt",
                    style: TextStyle(fontSize: 15, color: Colors.grey),
                  ),
                  SizedBox(
                    height: 8,
                  ),
                  Text(
                    "10",
                    style: TextStyle(fontSize: 18,color: Colors.black, fontWeight: FontWeight.bold),
                  ),
                ],
              ),
              Column(
                children: [
                  Text(
                    "Height",
                    style: TextStyle(fontSize: 15, color: Colors.grey),
                  ),
                  SizedBox(
                    height: 8,
                  ),
                  Text(
                    "170 cm",
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