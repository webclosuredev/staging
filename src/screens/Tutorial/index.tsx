import { Button, Text, View } from "react-native-ui-lib";
import { useTutorialScreen } from "./index.hooks";
import { Animated, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import { useEffect, useRef, useState, useCallback } from "react";
import Carousel from "react-native-reanimated-carousel";
import React from "react";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    defaultAnimatedBarStyles: {
        position: "absolute",
        width: 4,
        height: "100%",
        backgroundColor: "#3C77E8",
        borderRadius: 1,
        bottom: 0,
        transformOrigin: "bottom",
    },

    background: {
        top: 0,
        position: "absolute",
        width: width,
        height: height,
    },
});

const intervalBetweenImages = 5000;

export const TutorialScreen = () => {
    const {
        bgImages,
        bgImage,
        subtitles,
        subtitle,
        fill1Anim,
        fill2Anim,
        fill3Anim,
        onRegisterButtonClick,
        onLoginButtonClick,
        goto,
    } = useTutorialScreen();

    const initialValue = 1;
    const img1Anim = useRef(new Animated.Value(initialValue)).current;
    const img2Anim = useRef(new Animated.Value(initialValue)).current;
    const img3Anim = useRef(new Animated.Value(initialValue)).current;

    const [imageIndex, setImageIndex] = useState(0);

    const scale1 = useCallback(() => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(img1Anim, {
            toValue: 1.1,
            duration: intervalBetweenImages,
            useNativeDriver: true,
        }).start();
    }, [img1Anim]);

    const scale2 = useCallback(() => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(img2Anim, {
            toValue: 1.1,
            duration: intervalBetweenImages,
            useNativeDriver: true,
        }).start();
    }, [img2Anim]);

    const scale3 = useCallback(() => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(img3Anim, {
            toValue: 1.1,
            duration: intervalBetweenImages,
            useNativeDriver: true,
        }).start();
    }, [img3Anim]);

    const resetAnimations = useCallback(() => {
        img1Anim.setValue(initialValue);
        img2Anim.setValue(initialValue);
        img3Anim.setValue(initialValue);
    }, [scale1, scale2, scale3]);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => {
                if (prevIndex === bgImages.length - 1) {
                    return 0;
                } else {
                    return prevIndex + 1;
                }
            });
        }, intervalBetweenImages);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (imageIndex === 0) {
            resetAnimations();
            scale1();
        } else if (imageIndex === 1) {
            scale2();
        } else if (imageIndex === 2) {
            scale3();
        }
    }, [imageIndex, scale1, scale2, scale3, resetAnimations]);

    useEffect(() => {
        resetAnimations();
        scale1();
    }, [scale1, resetAnimations]);

    const data: number[] = [...new Array(3).keys()];

    // Function to render each item in the carousel
    const renderItem = ({ item }: { item: number }) => {
        return (
            <Animated.Image
                source={bgImages[item]}
                style={[
                    styles.background,
                    {
                        transform: [
                            {
                                scale:
                                    item == 0
                                        ? img1Anim
                                        : item == 1
                                          ? img2Anim
                                          : img3Anim,
                            },
                        ],
                    },
                ]}
            />
        );
    };

    const renderTitleItem = ({ item }: { item: number }) => {
        return (
            <View
                style={[
                    {
                        width: width - 40,
                        height: 140,
                        justifyContent: "center",
                    },
                ]}
            >
                <Text
                    style={{
                        fontSize: 32,
                        color: "#FFF",
                        fontWeight: "bold",
                    }}
                >
                    {subtitles[item]}
                </Text>
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                vertical={true}
                width={width}
                height={height}
                data={data}
                autoPlay
                style={{
                    position: "absolute",
                    top: 0,
                    width: width,
                    height: height,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                withAnimation={{
                    type: "timing",
                    config: {
                        duration: 750,
                    },
                }}
                autoPlayInterval={4250}
                scrollAnimationDuration={750}
                renderItem={renderItem}
            />

            <SafeAreaView
                style={{
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                }}
            >
                <View
                    paddingH-25
                    paddingV-25
                    style={{
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text
                            Title
                            style={{
                                fontStyle: "italic",
                                fontWeight: "bold",
                                color: "#FFF",
                            }}
                        >
                            Sweep
                        </Text>
                        <View style={{ flexDirection: "column", gap: 5 }}>
                            <View>
                                <View
                                    style={{
                                        width: 4,
                                        height: 34,
                                        backgroundColor: "#FFF",
                                        borderRadius: 1,
                                    }}
                                />
                                {/*Progress bar*/}
                                <Animated.View
                                    style={[
                                        styles.defaultAnimatedBarStyles,
                                        {
                                            // Bind height to animated value
                                            transform: [
                                                {
                                                    scaleY: fill3Anim,
                                                },
                                            ],
                                        },
                                    ]}
                                />
                            </View>
                            <View>
                                <View
                                    style={{
                                        width: 4,
                                        height: 34,
                                        backgroundColor: "#FFF",
                                        borderRadius: 1,
                                    }}
                                />
                                {/*Progress bar*/}
                                <Animated.View
                                    style={[
                                        styles.defaultAnimatedBarStyles,
                                        {
                                            // Bind height to animated value
                                            transform: [
                                                {
                                                    scaleY: fill2Anim,
                                                },
                                            ],
                                        },
                                    ]}
                                />
                            </View>
                            <View>
                                <View
                                    style={{
                                        width: 4,
                                        height: 34,
                                        backgroundColor: "#FFF",
                                        borderRadius: 1,
                                    }}
                                />
                                {/*Progress bar*/}
                                <Animated.View
                                    style={[
                                        styles.defaultAnimatedBarStyles,
                                        {
                                            // Bind scale Y to animated value
                                            transform: [
                                                {
                                                    scaleY: fill1Anim,
                                                },
                                            ],
                                        },
                                    ]}
                                />
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "column",
                            gap: 5,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 24,
                                color: "#FFF",
                                fontWeight: "normal",
                            }}
                        >
                            Prenota con facilità
                        </Text>

                        <Carousel
                            loop
                            vertical={true}
                            width={width - 40}
                            height={140}
                            data={data}
                            autoPlay
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            withAnimation={{
                                type: "timing",
                                config: {
                                    duration: 750,
                                },
                            }}
                            autoPlayInterval={4250}
                            scrollAnimationDuration={750}
                            renderItem={renderTitleItem}
                        />

                        <Text></Text>
                        <View style={{ flexDirection: "row", gap: 15 }}>
                            <Button
                                style={{
                                    flex: 1,
                                    paddingVertical: 16,
                                    borderWidth: 0,
                                }}
                                onPress={onRegisterButtonClick}
                            >
                                <Text style={{ color: "#FFF" }}>
                                    Registrati
                                </Text>
                            </Button>
                            <Button
                                style={{
                                    flex: 1,
                                    paddingVertical: 16,
                                    backgroundColor: "transparent",
                                }}
                                onPress={onLoginButtonClick}
                            >
                                <Text style={{ color: "#FFF" }}>Accedi</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
            {/* </ImageBackground> */}
        </View>
    );
};
