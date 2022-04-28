import {Fragment, useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
    getAnnots,
    getSelectedAnnot,
    selectedAnnot,
} from 'app/AnnotsSlice'
import {getAsideState, toggleAsideAction} from "app/AsideSlice"
import '@google/model-viewer'
import {Route, Routes, useNavigate, Outlet} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const modelViewerRef = useRef()
    const dispatch = useDispatch()
    const annots = useSelector(getAnnots)
    const currentAnnot = useSelector(getSelectedAnnot)

    useEffect(() => {
        if (currentAnnot) {
            modelViewerRef.current.autoRotate = false
            modelViewerRef.current.cameraControls = false
            return
        }

        modelViewerRef.current.autoRotate = true
        modelViewerRef.current.cameraControls = true
    }, [currentAnnot])

    function mouseEnter() {
        modelViewerRef.current.autoRotate = false
    }

    function mouseLeave() {
        if (currentAnnot) return
        modelViewerRef.current.autoRotate = true
    }

    function calculateOffset(orbit) {
        const xyz = orbit.split(' ')
        xyz[0] = `${
            parseFloat(xyz[0].replace('rad', '')) + modelViewerRef.current.turntableRotation
        }rad`
        return xyz.join(' ')
    }

    function reset() {
        modelViewerRef.current.cameraOrbit = calculateOffset(currentAnnot.default_camera_orbit_position)
        modelViewerRef.current.cameraTarget = '0m 0m 0m'
    }

    function selectAnnot(annot) {
        dispatch(selectedAnnot(annot))
        annot.brand ? brandAction() : continentAction()
        moveCameraTo(annot)
    }

    function brandAction() {
        dispatch(toggleAsideAction(true))
    }

    function continentAction() {
        navigate('land/1')
    }

    function moveCameraTo(annot) {
        if (!annot.brand) {
            modelViewerRef.current.cameraOrbit = calculateOffset(annot.mount_camera_orbit_position)
            modelViewerRef.current.cameraTarget = annot.camera_orbit_target
            return
        }

        modelViewerRef.current.cameraOrbit = calculateOffset(annot.default_camera_orbit_position)
    }

    return (
        <Fragment>
            <div className='bg-stars flex items-center h-[100vh]'>
                <model-viewer
                    bounds='tight'
                    src='/very_small_size.glb'
                    ar
                    disable-zoom
                    interpolation-decay='200'
                    ar-modes='webxr scene-viewer quick-look'
                    camera-controls
                    environment-image='neutral'
                    poster='poster.webp'
                    orbit-sensitivity={0.4}
                    min-camera-orbit='auto 45deg auto'
                    max-camera-orbit='auto 135deg auto'
                    auto-rotate
                    auto-rotate-delay={0}
                    ref={(ref) => {
                        modelViewerRef.current = ref
                    }}
                >
                    <div className='progress-bar hide' slot='progress-bar'>
                        <div className='update-bar'></div>
                    </div>
                    <button slot='ar-button' id='ar-button'>
                        View in your space
                    </button>

                    {annots.map((annot) => (
                        <button
                            className={`hotspot ${annot.brand && 'hotspot-brand'} ${(getAsideState && currentAnnot && (annot.id !== currentAnnot.id || !annot.brand)) && 'transition scale-0'}`}
                            key={`hotspot-${annot.id}`}
                            slot={`hotspot-${annot.id}`}
                            data-position={annot.position}
                            data-normal={annot.normal_position}
                            data-visibility-attribute='visible'
                            onClick={() => selectAnnot(annot)}
                            onMouseEnter={mouseEnter}
                            onMouseLeave={mouseLeave}
                        >
                            {annot.brand && (
                                <img
                                    className='absolute top-0 left-0 transform translate-x-[-20px] translate-y-[-38px] h-[62px] max-w-[48px] w-[48px]'
                                    src={annot.brandPinImage}
                                    alt='Brand Annot'
                                />
                            )}
                            <div className='hotspot-annotation'>{annot.name}</div>
                        </button>
                    ))}
                </model-viewer>
            </div>

            <Outlet context={[reset]}/>
        </Fragment>
    )
}

export default Home
