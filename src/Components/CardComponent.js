import React, {Component} from 'react';
import {
    Image,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

import { Card,
         CardItem,
         Body
        } from 'native-base';



class CardComponent extends Component{

    render(){

        const items = [{
            _id: 1,
            title:'Camisa Jeanswear Slim Maxi Folhas',
            priceOld:'299,00',
            priceNew: '149,90',
            thumbnail_url: 'https://aramismenswear.vteximg.com.br/arquivos/ids/363495-384-506/ML240291_148_1-102-MOBILE.jpg',
        },{
            _id: 2,
            title:'Polo Losangos Degradê',
            priceOld:'219,00',
            priceNew: '109,90',
            thumbnail_url: 'https://aramismenswear.vteximg.com.br/arquivos/ids/396542-1320-882/PO011453_031_1-103-MOBILE.jpg',
        },{
            _id: 3,
            title:'Bermuda Jeans Five Pockets Power',
            priceOld:'279,00',
            priceNew: '139,90',
            thumbnail_url: 'https://aramismenswear.vteximg.com.br/arquivos/ids/371723-384-506/BE090135_007_1-103-MOBILE.jpg',
        }      
    ];

        return(
            
            <FlatList
                data={items}
                keyExtractor={item=>item._id}
                renderItem={({item})=>(
                    <Card>
                        <CardItem>
                            <Image style={styles.thumbnail} source={{uri: item.thumbnail_url }} />
                        </CardItem>                       
                        <CardItem>
                            <Body>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.priceOld}>de: {item.priceOld}</Text>
                                <Text style={styles.priceNew}>por: {item.priceNew}</Text>
                            </Body>                        
                        </CardItem>
                    </Card>
                )
            }
          />
        )
    }
}

export default CardComponent;

const styles = StyleSheet.create({

    thumbnail:{
        height:160,
        width: 400,
        resizeMode: 'contain',
        borderRadius: 2,
    },
    title:{
        width: '100%',
        textTransform: 'uppercase',
        fontSize: 16,
        lineHeight: 25,
        color: '#100F0F',
        fontWeight: '300',
        fontFamily: 'Encode Sans'
    },
    priceOld:{
        color: '#a3a3a3',
        minHeight: 15,
        textTransform: 'uppercase',
    },
    priceNew:{
        color: '#000',
        minHeight: 20,
        textTransform: 'uppercase',
        marginTop: 5,
        fontWeight: 'bold',
    },
})