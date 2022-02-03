import { Story, Meta } from '@storybook/angular/types-6-0'; 
import { ImageComponent } from '../app/image/image.component'; 
  
export default { 
  title: 'Main/Image Component', 
  component: ImageComponent, 
} as Meta; 
  
const Template: Story<ImageComponent> = (args: ImageComponent) => ({ 
  component: ImageComponent, 
  props: args, 
}); 
  
export const NoImageCaption = Template.bind({}); 
NoImageCaption.args = { 
  figCaptionTxt: ''
}; 
  
export const WithImageCaption = Template.bind({}); 
WithImageCaption.args = { 
  figCaptionTxt:  'Ahmedabad has emerged as an important economic and industrial hub in India. It is the second-largest producer of cotton in India, due to which it was known as the Manchester of India along with Kanpur.' 
}; 
  
export const WithFullOpacity = Template.bind({}); 
WithFullOpacity.args = { 
    imgOpacity: 1 
}; 
  
export const WithHalfOpacity = Template.bind({}); 
WithHalfOpacity.args = { 
    imgOpacity: 0.5 
}; 
export const WithZeroOpacity = Template.bind({}); 
WithZeroOpacity.args = { 
    imgOpacity: 1 
}; 
