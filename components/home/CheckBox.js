import React from 'react'
import { Icon } from 'react-native-vector-icons'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const CheckBox = ({ selected, onPress, style, textStyle, size = 30, color = '#211f30', text = '', ...props }) => (
    <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress} {...props}>
        <Icon
            size={size}
            color={color}
            name={selected ? 'check-box' : 'check-box-outline-blank'}
        />

        <Text style={textStyle}> {text} </Text>
    </TouchableOpacity>
)

export default CheckBox


const styles = StyleSheet.create({
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

