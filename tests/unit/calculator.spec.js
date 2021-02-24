import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(App)
  })

  it('enterNum changes running total', () => {
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })


  it('should add', () => {
    wrapper.vm.previousTotal = 1
    wrapper.vm.add('4')
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('should subtract', () => {
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4')
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('should multiply', () => {
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5')
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('should divide', () => {
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7')
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('should numberClick', () => {
    wrapper.vm.numberClick('1')
    wrapper.vm.numberClick('2')
    expect(wrapper.vm.runningTotal).to.equal(12)
  })

  it('should operatorClick', () => {
    wrapper.vm.numberClick('2')
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick('3')
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('should clearClick', () => {
    wrapper.vm.runningTotal = 10
    wrapper.vm.clearClick()
    expect(wrapper.vm.runningTotal).to.equal(0)
  })

})


// add() - add 1 to 4 and get 5
// subtract() subtract 4 from 7 and get 3
// multiply() - multiply 3 by 5 and get 15
// divide() - divide 21 by 7 and get 3
// numberClick() - concatenate multiple number button clicks
// operatorClick() - chain multiple operations together
// clearClick() - clear the running total without affecting the calculation