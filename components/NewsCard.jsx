import{Image,View,Text,StyleSheet} from "react-native";
export const NewsCard=(news)=>{
    return(
        <View style={styles.card}>
            <Image 
            style={styles.img}
            source={{uri: news.news.urlToImage}}/>
            <Text style={styles.newsTitle}>{news.news.title}</Text>
            <Text style={styles.newsDesc}>{news.news.description}</Text>
            <Text style={styles.newsAuthor}>{news.news.author}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
  img:{
    height:300,
    width:"100%",
    borderRadius:3,
    marginBottom:10
  },
  card:{
    padding:15,
    marginBottom:20,
    backgroundColor:"#eee"

  },
  newsTitle:{
    fontWeight:"700",
    marginBottom :15,
    fontSize:20

  },
  newsAuthor:{
    fontSize:"italic",
    fontWeight:"600"
  }
});