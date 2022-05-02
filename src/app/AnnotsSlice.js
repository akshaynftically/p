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
                brand: false,
                brandPinImage: null
            },
            {
                id: 7,
                name: 'Etapalli 0594',
                default_camera_orbit_position: '-1.3351877042241003rad 1.3282189208150337rad 0.06457764286903352m',
                normal_position: '-0.9310617465971284m 0.2931777705732365m 0.2171884409106789m',
                position: '-0.0212659638571396m 0.007051869204880147m 0.005308523593474941m',
                "camera_orbit_target": '-0.0212659638571396m 0.007051869204880147m 0.005308523593474941m',
                "mount_camera_orbit_position": '-1.354409686043387rad 4.1643751299540375rad 0.02588959374274817m',
                brand: false,
                brandPinImage: null
            },
            {
                id: 8,
                name: 'Etapalli 5952',
                "default_camera_orbit_position": "-3.4159672361619635rad 1.6886310799266784rad 0.06457764286903352m",
                "normal_position": "0.28092529709412245m -0.076259756990356m -0.9566950542970059m",
                "position": "0.005952195034625373m -0.0015502684921264854m -0.02235692822294861m",
                "camera_orbit_target": "0.005952195034625373m -0.0015502684921264854m -0.02235692822294861m",
                "mount_camera_orbit_position": "-3.3775232725233892rad 4.356194490192345rad 0.02588959374274817m",
                brand: false,
                brandPinImage: null
            },
            {
                id: 9,
                name: 'Etapalli 514',
                "default_camera_orbit_position": "-5.2324445180846215rad 1.760313053794433rad 0.06457764286903352m",
                "normal_position": "0.9193265603105459m 0.035732603901958065m 0.3918696932986351m",
                "position": "0.02082133792883925m -0.00017461809432786716m 0.010089216238413114m",
                "camera_orbit_target": "0.02082133792883925m -0.00017461809432786716m 0.010089216238413114m",
                "mount_camera_orbit_position": "-5.150751095352646rad 4.356194490192345rad 0.02588959374274817m",
                brand: false,
                brandPinImage: null
            },
            {
                id: 10,
                name: 'Etapalli 312',
                "default_camera_orbit_position": "-6.0734062226784475rad 1.7170635947010335rad 0.06457764286903352m",
                "normal_position": "0.20112793462405454m -0.10576507137686464m 0.9738384381356637m",
                "position": "0.003982300518334277m -0.0012832733178046204m 0.022806391080575625m",
                "camera_orbit_target": "0.003982300518334277m -0.0012832733178046204m 0.022806391080575625m",
                "mount_camera_orbit_position": "0.16338684546394314rad 4.356194490192345rad 0.02588959374274817m",
                brand: false,
                brandPinImage: null
            },
            {
                id: 212,
                name: 'Tropicalli 2',
                "default_camera_orbit_position": "4.347621654930712rad 1.4865144420982164rad 0.06457764286903352m",
                "normal_position": "-0.9470391823032214m 0.11017628939826575m -0.3016255500399053m",
                "position": "-0.022004165848663312m 0.0014881081548166666m -0.006688972283580502m",
                "camera_orbit_target": "-0.022004165848663312m 0.0014881081548166666m -0.006688972283580502m",
                "mount_camera_orbit_position": "4.414827819874145rad 4.748893571891069rad 0.02588959374274817m",
                brand: false,
                brandPinImage: null
            },
            {
                id: 21233,
                name: 'Tropicalli 23w',
                "default_camera_orbit_position": "5.957736551491739rad 0.8979037739163344rad 0.06457764286903352m",
                "normal_position": "-0.2309996935534065m 0.6475271458566172m 0.7261871225497017m",
                "position": "-0.005545483846759346m 0.014374087004392803m 0.017558328521039685m",
                "camera_orbit_target": "-0.005545483846759346m 0.014374087004392803m 0.017558328521039685m",
                "mount_camera_orbit_position": "-0.31766290028863364rad 2.4270457743253577rad 0.02588959374274817m",
                brand: false,
                brandPinImage: null
            },
            {
                id: 2123,
                name: 'Tropicalli 23',
                "default_camera_orbit_position": "0.716298696729275rad 1.3245686497942082rad 0.06457764286903352m",
                "normal_position": "0.6202871709253251m 0.31315684582881326m 0.7191499256038377m",
                "position": "0.015147099109074916m 0.007733245029682143m 0.015944202133086904m",
                "camera_orbit_target": "0.015147099109074916m 0.007733245029682143m 0.015944202133086904m",
                "mount_camera_orbit_position": "0.7586290656943634rad 2.748893571891069rad 0.02588959374274817m",
                brand: false,
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
                brand: true,
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
                brand: true,
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