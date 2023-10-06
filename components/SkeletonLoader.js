import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useEffect } from 'react'
import { Animated, StyleSheet, View } from 'react-native'

const SkeletonLoader = ({ width, height, style }) => {
    const translateX = useRef(new Animated.Value(-width)).current
    useEffect(() => {
        Animated.loop(
            Animated.timing(translateX, {
                toValue: width,
                useNativeDriver: true,
                duration: 1000
            })).start()
    }, [width]);



    return (
        <View style={StyleSheet.flatten([{ width: width, height: height, backgroundColor: "rgba(0,0,0,0.12)", overflow: "hidden" }, style])}>
            <Animated.View style={{ width: "100%", height: "100%", transform: [{ translateX }] }}>
                <LinearGradient
                    style={{ width: "100%", height: "100%" }}
                    colors={["transparent", "rgba(255,255,255,0.5)", "transparent"]}
                    start={{ x: 1, y: 1 }} />
            </Animated.View>
        </View>
    )
}

export default SkeletonLoader