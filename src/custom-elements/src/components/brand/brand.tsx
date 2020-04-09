import { Component, Prop, Watch, h } from '@stencil/core';
import { ICON_SIZES } from '../../constants/size';

@Component({
  tag: 'chi-brand',
  styleUrl: 'brand.scss',
  scoped: true
})
export class Brand {
  /**
   *  to set brand color { black, white, inverse }.
   */
  @Prop({ reflect: true }) color: string;

  /**
   *  to set brand type { black, white, inverse }.
   */
  @Prop({ reflect: true }) type: string;

  /**
   *  to set size of brand.
   */
  @Prop({ reflect: true }) size: string;

  @Watch('size')
  sizeValidation(newValue: string) {
    if (newValue && !ICON_SIZES.includes(newValue)) {
      throw new Error(`${newValue} is not a valid size for brand. Valid values are xs, sm, sm--2, sm--3, md, lg, xl or xxl. `);
    }
  }

  @Watch('color')
  colorValidation(newValue: string) {
    if (newValue && !['', 'inverse', 'white', 'black'].includes(newValue)) {
      throw new Error(`${newValue} is not a valid color for brand. Valid values are inverse, white or black.`);
    }
  }

  componentWillLoad() {
    this.sizeValidation(this.size);
    this.colorValidation(this.color);
    this.colorValidation(this.type);
  }

  _brandSVG() {
    if (this.type === 'inverse' || this.color === 'inverse') {
      return (<svg viewBox="0 0 204 41" xmlns="http://www.w3.org/2000/svg" data-brand-type="inverse" aria-hidden="true"><path fill="#00753C" d="M18.634.03c-2.406.214-4.692.841-6.791 1.817l6.791 11.758V.03"/><path fill="#84BF41" d="M8.639 3.7C6.712 5.055 5.028 6.744 3.67 8.669l11.758 6.786L8.639 3.7"/><path fill="#00753C" d="M1.814 11.873C.844 13.967.216 16.257 0 18.662h13.578L1.814 11.873M0 22.363c.218 2.412.844 4.696 1.814 6.787l11.764-6.787H0"/><path fill="#84BF41" d="M3.67 32.358a20.6867 20.6867 0 0 0 4.969 4.971l6.789-11.759L3.67 32.358m8.173 6.823c2.099.973 4.385 1.604 6.791 1.819V27.422l-6.791 11.759"/><path fill="#00753C" d="M22.335 41c2.407-.215 4.69-.846 6.789-1.819l-6.789-11.759V41"/><path fill="#84BF41" d="M32.33 37.329a20.6729 20.6729 0 0 0 4.97-4.971L25.542 25.57l6.788 11.759"/><path fill="#00753C" d="M27.393 22.363l11.761 6.787c.972-2.091 1.599-4.375 1.815-6.787H27.393m13.576-3.701c-.218-2.405-.845-4.695-1.815-6.789l-11.761 6.789h13.576"/><path fill="#84BF41" d="M32.331 3.7l-6.787 11.755L37.3 8.669c-1.358-1.925-3.042-3.614-4.969-4.969zm-3.207-1.853C27.025.871 24.742.245 22.335.03v13.575l6.789-11.758"/><path fill="#FFFFFF" d="M188.016 22.141l.05.046 3.87-5.513h4.365l-4.523 5.75 4.81 7.525h-4.573l-3.949-7.185-.05.052v7.133h-3.919V11.074h3.919v11.067m-16.371-3.797l.051.08c.814-1.205 2.041-1.987 4.028-1.987 1.305 0 3.843.963 4.312 2.876.21.809.265 1.648.265 2.092v8.544h-3.924v-7.89c-.023-1.414-.419-3.005-2.353-3.005-1.23 0-2.3 1.097-2.353 3.005v7.89h-3.92v-13.12h3.894v1.515M160.068 29.95h3.923V16.829h-3.923V29.95zm-.13-15.501h4.184v-3.375h-4.184v3.375zm-14.56 15.5V11.074h4.054v15.742h8.181v3.133h-12.235m-9.572 5.025h-2.541l1.989-5.074-5.462-13.071h2.766l4.107 10.353 4.189-10.353h2.663l-7.711 18.145m-12.105-5.025h-2.484v-13.12h2.484v2.533h.055c.366-1.802 2.035-2.717 3.841-2.717.313 0 .577.029.861.029v2.351c-.338-.128-.731-.128-1.07-.128-3.139.102-3.687 1.775-3.687 4.548v6.504m-8.285-13.12h2.481v13.12h-2.428V28.02h-.053c-.994 1.642-2.668 2.323-4.497 2.323-2.746 0-4.316-2.086-4.316-4.731v-8.783h2.486v7.763c0 2.277.521 3.948 2.901 3.948 1.019 0 2.403-.52 2.931-1.883.468-1.225.495-2.767.495-3.083v-6.745m-16.434-.004v-2.792l2.484-.786v3.578h3.033v1.802h-3.033v8.426c0 .937.732 1.382 1.623 1.382.39 0 .912-.051 1.303-.154v1.907c-.571.029-1.124.155-1.694.155-.602 0-1.076-.024-1.674-.126-.393-.079-1.05-.287-1.464-.865-.447-.627-.578-.678-.578-2.43v-8.295h-2.246v-1.802h2.246m-12.923 1.938h.051c.839-1.649 2.668-2.326 3.974-2.326.915 0 4.971.237 4.971 4.446v9.066h-2.486v-8.26c0-2.17-.913-3.345-3.01-3.345 0 0-1.357-.079-2.403.969-.365.362-1.046.942-1.046 3.503v7.133h-2.485v-13.12h2.434v1.934m-7.591 3.378c.051-2.202-.945-3.902-3.349-3.902-2.066 0-3.294 1.751-3.294 3.902h6.643zm-6.643 1.719c-.181 2.304.761 4.68 3.294 4.68 1.935 0 2.901-.755 3.193-2.664h2.613c-.394 2.979-2.692 4.467-5.83 4.467-4.209 0-5.882-2.976-5.882-6.846 0-3.843 1.932-7.06 6.089-7.06 3.923.077 5.778 2.562 5.778 6.192v1.231h-9.255zm-7.262-7.921c-.131-1.806-2.066-3.009-4.001-3.009-4.658 0-5.521 4.263-5.521 7.588 0 3.896 1.181 7.578 5.287 7.578 2.008 0 3.841-.994 4.153-3.003h2.747c-.261 3.164-3.453 5.25-7.136 5.25-5.57 0-7.79-4.545-7.79-9.825 0-4.629 2.035-10.017 8.361-9.835 3.633.106 6.357 1.884 6.642 5.256h-2.742"/></svg>);
    } else if (this.type === 'white' || this.color === 'white') {
      return (<svg viewBox="0 0 204 41" xmlns="http://www.w3.org/2000/svg" data-brand-type="white" aria-hidden="true"><path fill="#FFFFFF" d="M18.634.03c-2.406.214-4.692.841-6.791 1.817l6.791 11.758V.03"/><path fill="#FFFFFF" d="M8.639 3.7C6.712 5.055 5.028 6.744 3.67 8.669l11.758 6.786L8.639 3.7"/><path fill="#FFFFFF" d="M1.814 11.873C.844 13.967.216 16.257 0 18.662h13.578L1.814 11.873M0 22.363c.218 2.412.844 4.696 1.814 6.787l11.764-6.787H0"/><path fill="#FFFFFF" d="M3.67 32.358a20.6867 20.6867 0 0 0 4.969 4.971l6.789-11.759L3.67 32.358m8.173 6.823c2.099.973 4.385 1.604 6.791 1.819V27.422l-6.791 11.759"/><path fill="#FFFFFF" d="M22.335 41c2.407-.215 4.69-.846 6.789-1.819l-6.789-11.759V41"/><path fill="#FFFFFF" d="M32.33 37.329a20.6729 20.6729 0 0 0 4.97-4.971L25.542 25.57l6.788 11.759"/><path fill="#FFFFFF" d="M27.393 22.363l11.761 6.787c.972-2.091 1.599-4.375 1.815-6.787H27.393m13.576-3.701c-.218-2.405-.845-4.695-1.815-6.789l-11.761 6.789h13.576"/><path fill="#FFFFFF" d="M32.331 3.7l-6.787 11.755L37.3 8.669c-1.358-1.925-3.042-3.614-4.969-4.969zm-3.207-1.853C27.025.871 24.742.245 22.335.03v13.575l6.789-11.758"/><path fill="#FFFFFF" d="M188.016 22.141l.05.046 3.87-5.513h4.365l-4.523 5.75 4.81 7.525h-4.573l-3.949-7.185-.05.052v7.133h-3.919V11.074h3.919v11.067m-16.371-3.797l.051.08c.814-1.205 2.041-1.987 4.028-1.987 1.305 0 3.843.963 4.312 2.876.21.809.265 1.648.265 2.092v8.544h-3.924v-7.89c-.023-1.414-.419-3.005-2.353-3.005-1.23 0-2.3 1.097-2.353 3.005v7.89h-3.92v-13.12h3.894v1.515M160.068 29.95h3.923V16.829h-3.923V29.95zm-.13-15.501h4.184v-3.375h-4.184v3.375zm-14.56 15.5V11.074h4.054v15.742h8.181v3.133h-12.235m-9.572 5.025h-2.541l1.989-5.074-5.462-13.071h2.766l4.107 10.353 4.189-10.353h2.663l-7.711 18.145m-12.105-5.025h-2.484v-13.12h2.484v2.533h.055c.366-1.802 2.035-2.717 3.841-2.717.313 0 .577.029.861.029v2.351c-.338-.128-.731-.128-1.07-.128-3.139.102-3.687 1.775-3.687 4.548v6.504m-8.285-13.12h2.481v13.12h-2.428V28.02h-.053c-.994 1.642-2.668 2.323-4.497 2.323-2.746 0-4.316-2.086-4.316-4.731v-8.783h2.486v7.763c0 2.277.521 3.948 2.901 3.948 1.019 0 2.403-.52 2.931-1.883.468-1.225.495-2.767.495-3.083v-6.745m-16.434-.004v-2.792l2.484-.786v3.578h3.033v1.802h-3.033v8.426c0 .937.732 1.382 1.623 1.382.39 0 .912-.051 1.303-.154v1.907c-.571.029-1.124.155-1.694.155-.602 0-1.076-.024-1.674-.126-.393-.079-1.05-.287-1.464-.865-.447-.627-.578-.678-.578-2.43v-8.295h-2.246v-1.802h2.246m-12.923 1.938h.051c.839-1.649 2.668-2.326 3.974-2.326.915 0 4.971.237 4.971 4.446v9.066h-2.486v-8.26c0-2.17-.913-3.345-3.01-3.345 0 0-1.357-.079-2.403.969-.365.362-1.046.942-1.046 3.503v7.133h-2.485v-13.12h2.434v1.934m-7.591 3.378c.051-2.202-.945-3.902-3.349-3.902-2.066 0-3.294 1.751-3.294 3.902h6.643zm-6.643 1.719c-.181 2.304.761 4.68 3.294 4.68 1.935 0 2.901-.755 3.193-2.664h2.613c-.394 2.979-2.692 4.467-5.83 4.467-4.209 0-5.882-2.976-5.882-6.846 0-3.843 1.932-7.06 6.089-7.06 3.923.077 5.778 2.562 5.778 6.192v1.231h-9.255zm-7.262-7.921c-.131-1.806-2.066-3.009-4.001-3.009-4.658 0-5.521 4.263-5.521 7.588 0 3.896 1.181 7.578 5.287 7.578 2.008 0 3.841-.994 4.153-3.003h2.747c-.261 3.164-3.453 5.25-7.136 5.25-5.57 0-7.79-4.545-7.79-9.825 0-4.629 2.035-10.017 8.361-9.835 3.633.106 6.357 1.884 6.642 5.256h-2.742"/></svg>);
    } else if (this.type === 'black' || this.color === 'black') {
      return (<svg viewBox="0 0 204 41" xmlns="http://www.w3.org/2000/svg" data-brand-type="black" aria-hidden="true"><path fill="#242526" d="M18.634.03c-2.406.214-4.692.841-6.791 1.817l6.791 11.758V.03"/><path fill="#242526" d="M8.639 3.7C6.712 5.055 5.028 6.744 3.67 8.669l11.758 6.786L8.639 3.7"/><path fill="#242526" d="M1.814 11.873C.844 13.967.216 16.257 0 18.662h13.578L1.814 11.873M0 22.363c.218 2.412.844 4.696 1.814 6.787l11.764-6.787H0"/><path fill="#242526" d="M3.67 32.358a20.6867 20.6867 0 0 0 4.969 4.971l6.789-11.759L3.67 32.358m8.173 6.823c2.099.973 4.385 1.604 6.791 1.819V27.422l-6.791 11.759"/><path fill="#242526" d="M22.335 41c2.407-.215 4.69-.846 6.789-1.819l-6.789-11.759V41"/><path fill="#242526" d="M32.33 37.329a20.6729 20.6729 0 0 0 4.97-4.971L25.542 25.57l6.788 11.759"/><path fill="#242526" d="M27.393 22.363l11.761 6.787c.972-2.091 1.599-4.375 1.815-6.787H27.393m13.576-3.701c-.218-2.405-.845-4.695-1.815-6.789l-11.761 6.789h13.576"/><path fill="#242526" d="M32.331 3.7l-6.787 11.755L37.3 8.669c-1.358-1.925-3.042-3.614-4.969-4.969zm-3.207-1.853C27.025.871 24.742.245 22.335.03v13.575l6.789-11.758"/><path fill="#242526" d="M188.016 22.141l.05.046 3.87-5.513h4.365l-4.523 5.75 4.81 7.525h-4.573l-3.949-7.185-.05.052v7.133h-3.919V11.074h3.919v11.067m-16.371-3.797l.051.08c.814-1.205 2.041-1.987 4.028-1.987 1.305 0 3.843.963 4.312 2.876.21.809.265 1.648.265 2.092v8.544h-3.924v-7.89c-.023-1.414-.419-3.005-2.353-3.005-1.23 0-2.3 1.097-2.353 3.005v7.89h-3.92v-13.12h3.894v1.515M160.068 29.95h3.923V16.829h-3.923V29.95zm-.13-15.501h4.184v-3.375h-4.184v3.375zm-14.56 15.5V11.074h4.054v15.742h8.181v3.133h-12.235m-9.572 5.025h-2.541l1.989-5.074-5.462-13.071h2.766l4.107 10.353 4.189-10.353h2.663l-7.711 18.145m-12.105-5.025h-2.484v-13.12h2.484v2.533h.055c.366-1.802 2.035-2.717 3.841-2.717.313 0 .577.029.861.029v2.351c-.338-.128-.731-.128-1.07-.128-3.139.102-3.687 1.775-3.687 4.548v6.504m-8.285-13.12h2.481v13.12h-2.428V28.02h-.053c-.994 1.642-2.668 2.323-4.497 2.323-2.746 0-4.316-2.086-4.316-4.731v-8.783h2.486v7.763c0 2.277.521 3.948 2.901 3.948 1.019 0 2.403-.52 2.931-1.883.468-1.225.495-2.767.495-3.083v-6.745m-16.434-.004v-2.792l2.484-.786v3.578h3.033v1.802h-3.033v8.426c0 .937.732 1.382 1.623 1.382.39 0 .912-.051 1.303-.154v1.907c-.571.029-1.124.155-1.694.155-.602 0-1.076-.024-1.674-.126-.393-.079-1.05-.287-1.464-.865-.447-.627-.578-.678-.578-2.43v-8.295h-2.246v-1.802h2.246m-12.923 1.938h.051c.839-1.649 2.668-2.326 3.974-2.326.915 0 4.971.237 4.971 4.446v9.066h-2.486v-8.26c0-2.17-.913-3.345-3.01-3.345 0 0-1.357-.079-2.403.969-.365.362-1.046.942-1.046 3.503v7.133h-2.485v-13.12h2.434v1.934m-7.591 3.378c.051-2.202-.945-3.902-3.349-3.902-2.066 0-3.294 1.751-3.294 3.902h6.643zm-6.643 1.719c-.181 2.304.761 4.68 3.294 4.68 1.935 0 2.901-.755 3.193-2.664h2.613c-.394 2.979-2.692 4.467-5.83 4.467-4.209 0-5.882-2.976-5.882-6.846 0-3.843 1.932-7.06 6.089-7.06 3.923.077 5.778 2.562 5.778 6.192v1.231h-9.255zm-7.262-7.921c-.131-1.806-2.066-3.009-4.001-3.009-4.658 0-5.521 4.263-5.521 7.588 0 3.896 1.181 7.578 5.287 7.578 2.008 0 3.841-.994 4.153-3.003h2.747c-.261 3.164-3.453 5.25-7.136 5.25-5.57 0-7.79-4.545-7.79-9.825 0-4.629 2.035-10.017 8.361-9.835 3.633.106 6.357 1.884 6.642 5.256h-2.742"/></svg>);
    } else {
      return (<svg viewBox="0 0 204 41" xmlns="http://www.w3.org/2000/svg" data-brand-type="base" aria-hidden="true"><path fill="#00753C" d="M18.634.03c-2.406.214-4.692.841-6.791 1.817l6.791 11.758V.03"/><path fill="#84BF41" d="M8.639 3.7C6.712 5.055 5.028 6.744 3.67 8.669l11.758 6.786L8.639 3.7"/><path fill="#00753C" d="M1.814 11.873C.844 13.967.216 16.257 0 18.662h13.578L1.814 11.873M0 22.363c.218 2.412.844 4.696 1.814 6.787l11.764-6.787H0"/><path fill="#84BF41" d="M3.67 32.358a20.6867 20.6867 0 0 0 4.969 4.971l6.789-11.759L3.67 32.358m8.173 6.823c2.099.973 4.385 1.604 6.791 1.819V27.422l-6.791 11.759"/><path fill="#00753C" d="M22.335 41c2.407-.215 4.69-.846 6.789-1.819l-6.789-11.759V41"/><path fill="#84BF41" d="M32.33 37.329a20.6729 20.6729 0 0 0 4.97-4.971L25.542 25.57l6.788 11.759"/><path fill="#00753C" d="M27.393 22.363l11.761 6.787c.972-2.091 1.599-4.375 1.815-6.787H27.393m13.576-3.701c-.218-2.405-.845-4.695-1.815-6.789l-11.761 6.789h13.576"/><path fill="#84BF41" d="M32.331 3.7l-6.787 11.755L37.3 8.669c-1.358-1.925-3.042-3.614-4.969-4.969zm-3.207-1.853C27.025.871 24.742.245 22.335.03v13.575l6.789-11.758"/><path fill="#1A1919" d="M188.016 22.141l.05.046 3.87-5.513h4.365l-4.523 5.75 4.81 7.525h-4.573l-3.949-7.185-.05.052v7.133h-3.919V11.074h3.919v11.067m-16.371-3.797l.051.08c.814-1.205 2.041-1.987 4.028-1.987 1.305 0 3.843.963 4.312 2.876.21.809.265 1.648.265 2.092v8.544h-3.924v-7.89c-.023-1.414-.419-3.005-2.353-3.005-1.23 0-2.3 1.097-2.353 3.005v7.89h-3.92v-13.12h3.894v1.515M160.068 29.95h3.923V16.829h-3.923V29.95zm-.13-15.501h4.184v-3.375h-4.184v3.375zm-14.56 15.5V11.074h4.054v15.742h8.181v3.133h-12.235m-9.572 5.025h-2.541l1.989-5.074-5.462-13.071h2.766l4.107 10.353 4.189-10.353h2.663l-7.711 18.145m-12.105-5.025h-2.484v-13.12h2.484v2.533h.055c.366-1.802 2.035-2.717 3.841-2.717.313 0 .577.029.861.029v2.351c-.338-.128-.731-.128-1.07-.128-3.139.102-3.687 1.775-3.687 4.548v6.504m-8.285-13.12h2.481v13.12h-2.428V28.02h-.053c-.994 1.642-2.668 2.323-4.497 2.323-2.746 0-4.316-2.086-4.316-4.731v-8.783h2.486v7.763c0 2.277.521 3.948 2.901 3.948 1.019 0 2.403-.52 2.931-1.883.468-1.225.495-2.767.495-3.083v-6.745m-16.434-.004v-2.792l2.484-.786v3.578h3.033v1.802h-3.033v8.426c0 .937.732 1.382 1.623 1.382.39 0 .912-.051 1.303-.154v1.907c-.571.029-1.124.155-1.694.155-.602 0-1.076-.024-1.674-.126-.393-.079-1.05-.287-1.464-.865-.447-.627-.578-.678-.578-2.43v-8.295h-2.246v-1.802h2.246m-12.923 1.938h.051c.839-1.649 2.668-2.326 3.974-2.326.915 0 4.971.237 4.971 4.446v9.066h-2.486v-8.26c0-2.17-.913-3.345-3.01-3.345 0 0-1.357-.079-2.403.969-.365.362-1.046.942-1.046 3.503v7.133h-2.485v-13.12h2.434v1.934m-7.591 3.378c.051-2.202-.945-3.902-3.349-3.902-2.066 0-3.294 1.751-3.294 3.902h6.643zm-6.643 1.719c-.181 2.304.761 4.68 3.294 4.68 1.935 0 2.901-.755 3.193-2.664h2.613c-.394 2.979-2.692 4.467-5.83 4.467-4.209 0-5.882-2.976-5.882-6.846 0-3.843 1.932-7.06 6.089-7.06 3.923.077 5.778 2.562 5.778 6.192v1.231h-9.255zm-7.262-7.921c-.131-1.806-2.066-3.009-4.001-3.009-4.658 0-5.521 4.263-5.521 7.588 0 3.896 1.181 7.578 5.287 7.578 2.008 0 3.841-.994 4.153-3.003h2.747c-.261 3.164-3.453 5.25-7.136 5.25-5.57 0-7.79-4.545-7.79-9.825 0-4.629 2.035-10.017 8.361-9.835 3.633.106 6.357 1.884 6.642 5.256h-2.742"/></svg>);
    }
  }

  render() {
    return (
      <span class={`chi-brand ${this.size ? `-${this.size}` : ''}`}>
        {this._brandSVG()}
      </span>
    );
  }
}
