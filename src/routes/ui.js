import AsyncComponent from '../components/AsyncComponent';

const AsyncAvatars = AsyncComponent(() => import('../containers/UiKit/Avatars'));
const AsyncBreadCrumbs = AsyncComponent(() => import('../containers/UiKit/BreadCrumbs'));
const AsyncButtons = AsyncComponent(() => import('../containers/UiKit/Buttons'));
const AsyncCards = AsyncComponent(() => import('../containers/UiKit/Cards'));
const AsyncDualListbox = AsyncComponent(() => import('../containers/UiKit/DualListbox'));
const AsyncImageCropper = AsyncComponent(() => import('../containers/UiKit/ImageCropper'));
const AsyncJsTree = AsyncComponent(() => import('../containers/UiKit/JsTree'));
const AsyncNotifications = AsyncComponent(() => import('../containers/UiKit/Notifications'));
const AsyncSpinners = AsyncComponent(() => import('../containers/UiKit/Spinners'));
const AsyncSweetAlert = AsyncComponent(() => import('../containers/UiKit/SweetAlert'));
const AsyncTabs = AsyncComponent(() => import('../containers/UiKit/Tabs'));
const AsyncToastr = AsyncComponent(() => import('../containers/UiKit/Toastr'));
const AsyncWidgets = AsyncComponent(() => import('../containers/UiKit/Widgets'));

const uiKitRoutes = {
    key: 'ui',
    path: "/ui/avatars",
    name: "UI Kit",
    badgeColor: "primary",
    badgeText: "75",
    containsHome: false,
    icon: 'bi-gem',
    header: 'Component',
    children: [
      {
        path: "/ui/avatars",
        name: "Avatars",
        component: AsyncAvatars
      },
      {
        path: "/ui/breadcrumbs",
        name: "BreadCrumbs",
        component: AsyncBreadCrumbs
      },
      {
        path: "/ui/buttons",
        name: "Buttons",
        component: AsyncButtons
      },
      {
        path: "/ui/cards",
        name: "Cards",
        component: AsyncCards
      },
      {
        path: "/ui/dual-listbox",
        name: "DualListbox",
        component: AsyncDualListbox
      },
      {
        path: "/ui/image-cropper",
        name: "ImageCropper",
        component: AsyncImageCropper
      },
      {
        path: "/ui/jstree",
        name: "JsTree",
        component: AsyncJsTree
      },
      {
        path: "/ui/notifications",
        name: "Notifications",
        component: AsyncNotifications
      },
      {
        path: "/ui/spinners",
        name: "Spinners",
        component: AsyncSpinners
      },
      {
        path: "/ui/sweetalert",
        name: "SweetAlert",
        component: AsyncSweetAlert
      },
      {
        path: "/ui/tabs",
        name: "Tabs",
        component: AsyncTabs
      },
      {
        path: "/ui/toastr",
        name: "Toastr",
        component: AsyncToastr
      },
      {
        path: "/ui/widgets",
        name: "Widgets",
        component: AsyncWidgets
      }
    ]
};

export default uiKitRoutes;
