import AsyncComponent from '../components/AsyncComponent';

const AsyncBasicElements = AsyncComponent(() => import('../containers/Form/BasicElements'));
const AsyncCheckboxs = AsyncComponent(() => import('../containers/Form/Checkboxs'));
const AsyncDropzonejs = AsyncComponent(() => import('../containers/Form/Dropzonejs'));
const AsyncInputGroups = AsyncComponent(() => import('../containers/Form/InputGroups'));
const AsyncRadios = AsyncComponent(() => import('../containers/Form/Radios'));
const AsyncCustomSelect = AsyncComponent(() => import('../containers/Form/CustomSelect'));
const AsyncValidations = AsyncComponent(() => import('../containers/Form/Validations'));

const formRoutes = {
    key: 'form',
    path: "/forms/basic-elememts",
    name: "Form",
    badgeColor: "primary",
    containsHome: false,
    icon: 'bi-layout-text-window',
    children: [
      {
        path: "/forms/basic-elements",
        name: "Basic Element",
        component: AsyncBasicElements
      },
      {
        path: "/forms/checkboxs",
        name: "Checkbox",
        component: AsyncCheckboxs
      },
      {
        path: "/forms/dropzonejs",
        name: "Dropzone JS",
        component: AsyncDropzonejs
      },
      {
        path: "/forms/input-groups",
        name: "Input Group",
        component: AsyncInputGroups
      },
      {
        path: "/forms/radios",
        name: "Radio",
        component: AsyncRadios
      },
      {
        path: "/forms/custom-select",
        name: "Custom Select",
        component: AsyncCustomSelect
      },
      {
        path: "/forms/validations",
        name: "Validation",
        component: AsyncValidations
      }
    ]
};

export default formRoutes;
