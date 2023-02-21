import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../components/Button.vue';
 
describe('UI Button', () => {
  it("renders a button", () => {
    const wrapper = mount(Button);
    expect(wrapper).toBeDefined();
  })

  it("can be disabled with a prop", () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    });
    const button = wrapper.find('button');
    expect(button.element.disabled).toBe(true);
  })
})