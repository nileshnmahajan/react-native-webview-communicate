import React, { PureComponent } from "react";

import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  View,
  Image,
  ScrollView,
  Alert,
  TextInput,
} from "react-native";
import html from "../assets/html.js";
import Text from "../Components/Text.js";
import colors from "../constants/colors.js";
import WebView from "react-native-webview";

const tickIcon = "https://cdn-icons-png.flaticon.com/512/4315/4315445.png";
const heartIcon = "https://cdn-icons-png.flaticon.com/512/1077/1077035.png";
const commentIcon = "https://cdn-icons-png.flaticon.com/512/9458/9458241.png";
const saveIcon = "https://cdn-icons-png.flaticon.com/512/5662/5662990.png";
const imageCapture = "https://cdn-icons-png.flaticon.com/512/2198/2198323.png";


import data from "../constants/data"

class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.setState({ data: data.dummyData });
  }

  componentWillUnmount() {}

  sendToWV() {
    this.refs.wv.postMessage(
      this.getInjectableJSMessage("hello from react native")
    );
  }
  getInjectableJSMessage = (message) => {
    return `
      ${JSON.stringify({ type: "alert", data: message })}
    `;
  };

  onNativeCall(obj) {
    const { type = null, data = null } = JSON.parse(obj.nativeEvent.data);
    // alert(value)
    switch (type) {
      case "alert":
        Alert.alert("Alert", data);
    }
  }

  Comments = (commentData) => {
    return (
      <FlatList
        data={commentData}
        renderItem={({ item }) => {
          const { user, text, like_count, comment_count, comments = [] } = item;
          return (
            <View>
              {/* user data */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                {/* profile icon name height weight */}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={user.icon}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      marginRight: 10,
                    }}
                  />
                  <View>
                    <View style={{ flexDirection: "row" }}>
                      <Text>{user.name}</Text>
                      {user.verified && (
                        <Image
                          source={{ uri: tickIcon }}
                          style={{ width: 20, height: 20, marginHorizontal: 5 }}
                        />
                      )}
                      <Text color={colors.subTextColor}>{user.status}</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 20,
                    marginBottom: 15,
                  }}
                >
                  <Text h1 bold color={colors.subTextColor}>
                    {"..."}
                  </Text>
                </TouchableOpacity>
              </View>
              {/* comment */}
              <View
                style={{
                  marginLeft: 25,
                }}
              >
                <Text>{text}</Text>
                {/* like comment count */}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {/* Like */}
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginHorizontal: 6,
                    }}
                  >
                    <Image
                      source={{ uri: heartIcon }}
                      style={{
                        width: 25,
                        height: 25,

                        marginRight: 5,
                        tintColor: colors.subTextColor,
                      }}
                    />
                    <Text color={colors.subTextColor}>{like_count}</Text>
                  </View>

                  {/* comments */}
                  {comment_count != 0 && (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 6,
                      }}
                    >
                      <Image
                        source={{ uri: commentIcon }}
                        style={{
                          width: 25,
                          height: 25,

                          marginRight: 5,
                          tintColor: colors.subTextColor,
                        }}
                      />
                      <Text color={colors.subTextColor}>{comment_count}</Text>
                    </View>
                  )}
                </View>

                {/* comments */}
                {comments.length > 0 && this.Comments(comments)}
              </View>
            </View>
          );
        }}
      />
    );
  };
  render() {
    const {
      user_icon,
      user_name,
      user_status,
      user_height,
      verified,
      user_weight,
      cta,
      post_title,
      post_text,
      post_tags = [],
      post_like_count,
      post_comment_count,
      post_comments = [],
    } = this.state.data;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
        <ScrollView 
      
        >
          <View style={{ paddingHorizontal: 15 }}>
            <View style={{ height: 15 }} />
            {/* user info row */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* profile icon name height weight */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={user_icon}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    marginRight: 10,
                  }}
                />
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Text>{user_name}</Text>
                    {verified && (
                      <Image
                        source={{ uri: tickIcon }}
                        style={{ width: 20, height: 20, marginHorizontal: 5 }}
                      />
                    )}
                    <Text color={colors.subTextColor}>{user_status}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text color={colors.subTextColor}>{user_height}</Text>
                    <Text color={colors.subTextColor}>.</Text>
                    <Text color={colors.subTextColor}>{user_weight}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.primary,
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderRadius: 15,
                }}
              >
                <Text color={colors.white}>{cta}</Text>
              </TouchableOpacity>
            </View>

            {/* title */}
            <Text
              bold
              style={{
                fontWeight: "bold",
                marginVertical: 15,
              }}
            >
              {post_title}
            </Text>
            {/* post content */}
            <Text justify color={colors.postTextColor}>
              {post_text}
            </Text>

            {/* tags */}
            <View
              style={{
                flexDirection: "row",
                marginVertical: 10,
                flexWrap: "wrap",
              }}
            >
              {post_tags.map((item, index) => {
                const { tag } = item;
                return (
                  <View
                    key={index}
                    style={{
                      backgroundColor: colors.tagBgColor,
                      marginHorizontal: 5,
                      marginVertical: 4,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 15,
                      borderWidth: 1,
                      borderColor: colors.borderColor,
                    }}
                  >
                    <Text color={colors.subTextColor}>#{tag}</Text>
                  </View>
                );
              })}
            </View>
          </View>
          {/* webview */}

          <WebView
            style={{
              height: 300,
              backgroundColor: "#EDEEF3",
              width: "100%",
            }}
            mixedContentMode="compatibility"
            ref={"wv"}
            onMessage={(obj) => this.onNativeCall(obj)}
            // inject javascript after page load

            source={{
              html: html,
            }}
            showsVerticalScrollIndicator={false}
          />

          {/* Like comment save call to webview */}
          <View style={{ paddingHorizontal: 15 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Like comment savbe */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {/* Like */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 6,
                  }}
                >
                  <Image
                    source={{ uri: heartIcon }}
                    style={{
                      width: 25,
                      height: 25,

                      marginRight: 5,
                      tintColor: colors.subTextColor,
                    }}
                  />
                  <Text color={colors.subTextColor}>{post_like_count}</Text>
                </View>

                {/* comments */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 6,
                  }}
                >
                  <Image
                    source={{ uri: commentIcon }}
                    style={{
                      width: 25,
                      height: 25,

                      marginRight: 5,
                      tintColor: colors.subTextColor,
                    }}
                  />
                  <Text color={colors.subTextColor}>{post_comment_count}</Text>
                </View>

                {/* comments */}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 6,
                  }}
                >
                  <Image
                    source={{ uri: saveIcon }}
                    style={{
                      width: 25,
                      height: 25,

                      marginRight: 5,
                      tintColor: colors.subTextColor,
                    }}
                  />
                </View>
              </View>

              {/* send to webview */}
              <TouchableOpacity
                style={{
                  backgroundColor: colors.primary,
                  paddingHorizontal: 25,
                  paddingVertical: 7,
                  borderRadius: 15,
                  marginVertical: 15,
                }}
                onPress={() => this.sendToWV()}
              >
                <Text color={colors.white}>WV Alert</Text>
              </TouchableOpacity>

              {/* infinite elevl comments render */}
            </View>

            {/* comments */}
            {this.Comments(post_comments)}
          </View>
          <View style={{ height: 15 }} />
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
            borderTopWidth: 1,
            borderTopColor: colors.borderColor,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              //  justifyContent: 'space-between',
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: imageCapture }}
              style={{
                width: 25,
                height: 25,
                marginHorizontal: 10,
                tintColor: colors.subTextColor,
              }}
            />

            <TextInput
              placeholder="댓글을 남겨주세요."
              placeholderTextColor={colors.subTextColor}
              style={{
                backgroundColor: colors.white,
                width: "75%",
                borderRadius: 15,
                paddingHorizontal: 15,
                paddingVertical: 10,
                marginHorizontal: 10,
              }}
            />
          </View>

          <Text color={colors.subTextColor}>등록</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
