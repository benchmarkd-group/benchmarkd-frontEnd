import React, { Component } from 'react';
import PriceFilterStyles from './priceFilter.module.css'
import List from '@material-ui/core/List';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button'
import cx from 'classnames'
import Slider from '@material-ui/core/Slider';
import Histogram from './Histogram/priceFilterHistogram'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class PriceFilter extends Component {

    constructor(props){
        super(props)
        this.state= {
            applyBtnStatus: 'disabled',
            appliedMin: this.props.data.min_price,
            appliedMax: this.props.data.max_price,
            value:[this.props.data.min_price,this.props.data.max_price],
            minError: false,
            maxError: false
        }
        this.minAmtInputRef = React.createRef()
        this.maxAmtInputRef = React.createRef()
        this.handleMinInput = this.handleMinInput.bind(this)
        this.handleMaxInput = this.handleMaxInput.bind(this)
        this.handleApplyPriceFilter = this.handleApplyPriceFilter.bind(this)
        this.handleChange = this.handleChange.bind(this)
        const priceValidationFilterRegex='\\b[1-9][0-9]{0,5}\\b'
        this.maxPriceIputLength = 6
    }

    componentDidMount() {
        this.minAmtInputRef.current.value = this.state.appliedMin
        this.maxAmtInputRef.current.value = this.state.appliedMax
    }

    handleApplyPriceFilter() {
        if(parseInt(this.minAmtInputRef.current.value) < this.props.data.min_price){
            this.setState({ appliedMin: this.props.data.min_price}, () => {
                this.minAmtInputRef.current.value = this.props.data.min_price
            })
            return(
                toast.info('Notify', {
                position: toast.POSITION.TOP_CENTER
                })
            )
        } else {
            this.setState({ appliedMin: parseInt(this.minAmtInputRef.current.value)})
            // console.log(parseInt(this.minAmtInputRef.current.value))
        }
        if(parseInt(this.maxAmtInputRef.current.value) > this.props.data.max_price){
            this.setState({ appliedMax: this.props.data.max_price}, () => {
                this.maxAmtInputRef.current.value = this.props.data.max_price
            })
            return(
                toast.info('Notify', {
                position: toast.POSITION.TOP_CENTER
                })
            )
        } else {
            this.setState({ appliedMax: parseInt(this.maxAmtInputRef.current.value)}, () => {
                this.setState({ value: [this.state.appliedMin,this.state.appliedMax]})
            })
        }
        this.setState({ applyBtnStatus: 'disabled'})
    }

    handleMinInput(event) {
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
        if(event.target.value.length > this.maxPriceIputLength){
            event.target.value = event.target.value.substring(0,this.maxPriceIputLength)
        }
        const enteredMinValue = parseInt(event.target.value)
        const enteredMaxValue = parseInt(this.maxAmtInputRef.current.value)
        if((!(enteredMinValue === this.state.appliedMin || event.target.value === '')) && enteredMinValue<= enteredMaxValue){
            this.setState({ applyBtnStatus:'enabled', minError: false, maxError: false })
        }
        else {
            this.setState({ applyBtnStatus: 'disabled', minError: true})
        }
    }

    handleMaxInput(event) {
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
        if(event.target.value.length > this.maxPriceIputLength){
            event.target.value = event.target.value.substring(0,this.maxPriceIputLength)
        }
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
        const enteredMinValue = parseInt(this.minAmtInputRef.current.value)
        const enteredMaxValue = parseInt(event.target.value)
        if((!(enteredMaxValue === this.state.appliedMax || event.target.value === '')) && enteredMinValue<= enteredMaxValue){
            this.setState({ applyBtnStatus:'enabled', minError: false, maxError: false })
        }
        else {
            this.setState({ applyBtnStatus: 'disabled', maxError: true})
        }
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue}, () => {
            this.minAmtInputRef.current.value = this.state.value[0]
            this.maxAmtInputRef.current.value = this.state.value[1]
        })
        if(newValue[0]!=this.state.appliedMin || newValue[1]!=this.state.appliedMax){
            this.setState({ applyBtnStatus: 'enabled' })
        }
        else {
            this.setState({ applyBtnStatus: 'disabled' })
        }
    }

    render(props) {

        return(
            <div>
               <List component="nav" className='suggestion-list'>
                    <div className={PriceFilterStyles.histogramContainer}>
                        <Histogram sliderVal={this.state.value}></Histogram>
                    </div>
                    <Slider
                        className={PriceFilterStyles.rangeSlider}
                        value={this.state.value}
                        min={this.props.data.min_price}
                        max={this.props.data.max_price}
                        onChange={this.handleChange}
                        aria-labelledby="range-slider"
                    />
                    <ToastContainer></ToastContainer>
                    <div className={PriceFilterStyles.priceListItemContainer} style={{ marginTop:'10px'}}>
                        <FormControl style={{width: 120, marginRight:20}} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Min.</InputLabel>
                            <OutlinedInput 
                                className={PriceFilterStyles.minPriceInputField}
                                id="min-amount-input"
                                inputRef={this.minAmtInputRef}
                                startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
                                labelWidth={28}
                                onChange= {this.handleMinInput}
                                pattern={this.priceValidationFilterRegex}
                                error={this.state.minError}
                            />
                        </FormControl>
                        <FormControl style={{width: 120}} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Max.</InputLabel>
                            <OutlinedInput
                                id="max-amount-input"
                                inputRef={this.maxAmtInputRef}
                                startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
                                labelWidth={30}
                                onChange= {this.handleMaxInput}
                                min={0}
                                error={this.state.maxError}
                            />
                        </FormControl>
                    </div>
                    <Button className={this.state.applyBtnStatus==='enabled' ? cx(PriceFilterStyles.applyBtn, PriceFilterStyles.applyBtnActive) : cx(PriceFilterStyles.applyBtn, PriceFilterStyles.applyBtnDisabled)} 
                    onClick={this.handleApplyPriceFilter}>APPLY</Button>
                </List>  
            </div>
        );
        
    }
}

export default PriceFilter;