///**
// * Sample React Native App
// * https://github.com/facebook/react-native
// *
// * @format
// * @flow
// */
//
//import React from 'react';
//import {
//  SafeAreaView,
//  StyleSheet,
//  ScrollView,
//  View,
//  Text,
//  StatusBar,
//} from 'react-native';
//
//import {
//  Header,
//  LearnMoreLinks,
//  Colors,
//  DebugInstructions,
//  ReloadInstructions,
//} from 'react-native/Libraries/NewAppScreen';
//
//const App: () => React$Node = () => {
//  return (
//    <>
//      <StatusBar barStyle="dark-content" />
//      <SafeAreaView>
//        <ScrollView
//          contentInsetAdjustmentBehavior="automatic"
//          style={styles.scrollView}>
//          <Header />
//          {global.HermesInternal == null ? null : (
//            <View style={styles.engine}>
//              <Text style={styles.footer}>Engine: Hermes</Text>
//            </View>
//          )}
//          <View style={styles.body}>
//            <View style={styles.sectionContainer}>
//              <Text style={styles.sectionTitle}>Step 123</Text>
//              <Text style={styles.sectionDescription}>
//                Edit <Text style={styles.highlight}>App.js</Text> to change this
//                screen and then come back to see your edits.
//              </Text>
//            </View>
//            <View style={styles.sectionContainer}>
//              <Text style={styles.sectionTitle}>See Your Changes</Text>
//              <Text style={styles.sectionDescription}>
//                <ReloadInstructions />
//              </Text>
//            </View>
//            <View style={styles.sectionContainer}>
//              <Text style={styles.sectionTitle}>Debug</Text>
//              <Text style={styles.sectionDescription}>
//                <DebugInstructions />
//              </Text>
//            </View>
//            <View style={styles.sectionContainer}>
//              <Text style={styles.sectionTitle}>Learn More</Text>
//              <Text style={styles.sectionDescription}>
//                Read the docs to discover what to do next:
//              </Text>
//            </View>
//            <LearnMoreLinks />
//          </View>
//        </ScrollView>
//      </SafeAreaView>
//    </>
//  );
//};
//
//const styles = StyleSheet.create({
//  scrollView: {
//    backgroundColor: Colors.lighter,
//  },
//  engine: {
//    position: 'absolute',
//    right: 0,
//  },
//  body: {
//    backgroundColor: Colors.white,
//  },
//  sectionContainer: {
//    marginTop: 32,
//    paddingHorizontal: 24,
//  },
//  sectionTitle: {
//    fontSize: 24,
//    fontWeight: '600',
//    color: Colors.black,
//  },
//  sectionDescription: {
//    marginTop: 8,
//    fontSize: 18,
//    fontWeight: '400',
//    color: Colors.dark,
//  },
//  highlight: {
//    fontWeight: '700',
//  },
//  footer: {
//    color: Colors.dark,
//    fontSize: 12,
//    fontWeight: '600',
//    padding: 4,
//    paddingRight: 12,
//    textAlign: 'right',
//  },
//});
//
//export default App;

import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  click(){
    Alert.alert("123");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me"
            color="#841584"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="This looks great!"
          />
          <Button
            onPress={this.click}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

//import React, { Component } from "react";
//
//import { Image, FlatList, StyleSheet, Text, View } from "react-native";
//
//const REQUEST_URL =
//  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
//
//export default class SampleAppMovies extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      data: [],
//      loaded: false
//    };
//    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
//    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
//    this.fetchData = this.fetchData.bind(this);
//  }
//
//  componentDidMount() {
//    this.fetchData();
//  }
//
//  fetchData() {
//    fetch(REQUEST_URL)
//      .then(response => response.json())
//      .then(responseData => {
//        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
//        this.setState({
//          data: this.state.data.concat(responseData.movies),
//          loaded: true
//        });
//      });
//  }
//
//  render() {
//    if (!this.state.loaded) {
//      return this.renderLoadingView();
//    }
//
//    return (
//      <FlatList
//        data={this.state.data}
//        renderItem={this.renderMovie}
//        style={styles.list}
//        keyExtractor={item => item.id}
//      />
//    );
//  }
//
//  renderLoadingView() {
//    return (
//      <View style={styles.container}>
//        <Text>Loading movies...</Text>
//      </View>
//    );
//  }
//
//  renderMovie({ item }) {
//    // { item }是一种“解构”写法，请阅读ES2015语法的相关文档
//    // item也是FlatList中固定的参数名，请阅读FlatList的相关文档
//    return (
//      <View style={styles.container}>
//        <Image
//          source={{ uri: item.posters.thumbnail }}
//          style={styles.thumbnail}
//        />
//        <View style={styles.rightContainer}>
//          <Text style={styles.title}>{item.title}</Text>
//          <Text style={styles.year}>{item.year}</Text>
//        </View>
//      </View>
//    );
//  }
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    flexDirection: "row",
//    justifyContent: "center",
//    alignItems: "center",
//    backgroundColor: "#F5FCFF"
//  },
//  rightContainer: {
//    flex: 1
//  },
//  title: {
//    fontSize: 20,
//    marginBottom: 8,
//    textAlign: "center"
//  },
//  year: {
//    textAlign: "center"
//  },
//  thumbnail: {
//    width: 53,
//    height: 81
//  },
//  list: {
//    paddingTop: 20,
//    backgroundColor: "#F5FCFF"
//  }
//});
//
