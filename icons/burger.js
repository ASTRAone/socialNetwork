import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const styles = StyleSheet.create({});
// TODO: доделать 
const Burger = ({width = 24, height = 24, stroke = '#4BB34B'}) => {
    return (
        <View style={{marginRight: 16}}>
            <Svg height={height} viewBox="0 0 24 24" width={width}>
                <Path 
                    d='M18.3001 5.69998C17.9135 5.31338 17.2867 5.31338 16.9001 5.69998L12.0001 10.6L7.10011 5.69998C6.71351 5.31338 6.08671 5.31338 5.70011 5.69998C5.31351 6.08658 5.31351 6.71338 5.70011 7.09998L10.6001 12L5.70011 16.9C5.31351 17.2866 5.31351 17.9134 5.70011 18.3C6.08671 18.6866 6.71351 18.6866 7.10011 18.3L12.0001 13.4L16.9001 18.3C17.2867 18.6866 17.9135 18.6866 18.3001 18.3C18.6867 17.9134 18.6867 17.2866 18.3001 16.9L13.4001 12L18.3001 7.09998C18.6867 6.71338 18.6867 6.08658 18.3001 5.69998Z'
                    fill='#2B2A29'
                    stroke={stroke}
                    strokeLinecap='round' 
                    strokeLinejoin='round' 
                    strokeWidth={1} />
            </Svg>
        </View>
    );
};

export default Burger;
