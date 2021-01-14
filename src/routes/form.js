import AsyncComponent from '../components/AsyncComponent';

const AsyncBasicElements = AsyncComponent(() => import('../containers/Form/BasicElements'));
const AsyncCheckboxs = AsyncComponent(() => import('../containers/Form/Checkboxs'));
const AsyncDropzonejs = AsyncComponent(() => import('../containers/Form/Dropzonejs'));
const AsyncInputGroups = AsyncComponent(() => import('../containers/Form/InputGroups'));
const AsyncRadios = AsyncComponent(() => import('../containers/Form/Radios'));
const AsyncSelect2 = AsyncComponent(() => import('../containers/Form/Select2'));
const AsyncValidations = AsyncComponent(() => import('../containers/Form/Validations'));

const formRoutes = {
    path: "/forms/basic-elememts",
    name: "BasicElements",
    badgeColor: "primary",
    badgeText: "75",
    containsHome: false,
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
        path: "/forms/select2",
        name: "Select",
        component: AsyncSelect2
      },
      {
        path: "/forms/validations",
        name: "Validation",
        component: AsyncValidations
      }
    ]
};

export default formRoutes;
