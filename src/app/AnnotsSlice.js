import {createSlice} from "@reduxjs/toolkit";

export const annotsSlice = createSlice({
    name: 'annots',
    initialState: {
        selectedAnnot: null,
        value: [
            {
                id: 1,
                name: 'Etapalli',
                position: '-0.007398469430484787m 0.01216199411204226m -0.01810417518190218m',
                normal_position: '-0.31016908445408015m 0.5514182396109462m -0.7744243436729524m',
                mount_camera_orbit_position: '-2.755139938215447rad 2.424262331020119rad 0.02588959374274817m',
                default_camera_orbit_position: '3.529055747532537rad 1.0314895879286485rad 0.06614345369711913m',
                camera_orbit_target: '-0.007398469430484787m 0.01216199411204226m -0.01810417518190218m',
                page: true,
                brandPinImage: null
            },
            {
                id: 2,
                name: 'Tropicalli',
                position: '-0.017463231247465672m 0.009391644051096555m -0.011830993016431025m',
                normal_position: '-0.7042734843276823m 0.44988081722241m -0.5491867711154763m',
                mount_camera_orbit_position: '',
                default_camera_orbit_position: '-2.174489154128482rad 1.2147491593880533rad 0.06457764286903352m',
                camera_orbit_target: '0m 0m 0m',
                page: false,
                brandPinImage: '/assets/images/brands-annots/brand-1.png'
            },
            {
                id: 3,
                name: 'Sunrise',
                position: '-0.02045427615093987m 0.00860276697583924m -0.006146949800751596m',
                normal_position: '-0.8790930983821116m 0.37950928241477283m -0.28838867685462877m',
                mount_camera_orbit_position: '',
                default_camera_orbit_position: '-1.8834351185629274rad 1.2461650859239513rad 0.06457764286903352m',
                camera_orbit_target: '0m 0m 0m',
                page: false,
                brandPinImage: '/assets/images/brands-annots/brand-1.png'
            },
            // {
            //     id: 3,
            //     name: 'Sunrise',
            //     position: [1, -.1, .3],
            //     azimutAngle: -1.6798805589845225,
            //     polarAngle: 1.4131024330987993
            // },
            // {
            //     id: 4,
            //     name: 'Moonrise',
            //     position: [-1, -.3, .1],
            //     azimutAngle: 1.892960233869436,
            //     polarAngle: 1.5966025831738544,
            //     is_page: true
            // }
        ]
    },
    reducers: {
        resetSelectedAnnot: (state) => {
            state.selectedAnnot = null
        },
        selectedAnnot: (state, action) => {
            state.selectedAnnot = action.payload
        }
    }
})

export const {selectedAnnot, resetSelectedAnnot} = annotsSlice.actions

export const getAnnots = (store) => store.annots.value
export const getSelectedAnnot = (store) => store.annots.selectedAnnot

export default annotsSlice.reducer