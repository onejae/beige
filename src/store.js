import Vue from 'vue'
import Vuex from 'vuex'
import Osc from './oscs/Oscillator'
import Bus from './oscs/Busses'
import SourceInput from './oscs/SourceInput'
import FinalGain from './oscs/FinalGain'

Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        test: [],
        childObjs: {},
        sourceInput: Object,
        finalGain: Object,
        ctx: Object,
        audioCtx: Object,
        redraw: 0,
        reevalute: 1
    },
    getters: {
        childObjs: state => { return state.childObjs }
        , redraw: state => { return state.redraw }
        , lengthOfChild: state => {
            if (state.reevalute)
                return Object.keys(state.childObjs).length
        }
    },
    mutations: {
        setCtx(state, ctx) {
            state.ctx = ctx
        },
        setAudioCtx(state, audioCtx) {
            state.audioCtx = audioCtx
        },
        addOsc(state, name) {
            state.childObjs[name] = new Osc(name, state.ctx, state.audioCtx)
            state.reevalute++
        },
        addBus(state, name) {
            state.childObjs[name] = new Bus(name, state.ctx)
        },
        playNote(state, freq) {
            state.sourceInput.playNote(freq)
        },
        connect(state, from, to) {
            state.childObjs[from].o.connect(state.childObjs[to].o)
        },
        connectToOutput(state, target) {
            state.childObjs[target].o.connect(state.finalGain.finalGain)
            state.childObjs[target].connect(state.finalGain)
        },
        setSource(state, target) {
            // assume that target is a osc
            state.sourceInput.connect(state.childObjs[target].o.frequency)
        },
        changeOscType(state, payload) {
            state.childObjs[payload.name].o.type = payload.type
        },
        initSourceInput(state) {
            state.sourceInput = new SourceInput(state.ctx, state.audioCtx)
            state.sourceInput.start()
            state.childObjs["sourceInput"] = state.sourceInput
        },
        initFinalGain(state) {
            state.finalGain = new FinalGain(state.ctx, state.audioCtx)
            state.childObjs["finalGain"] = state.finalGain
        },
        move(state, payload) {
            state.childObjs[payload.name].move(payload.position.x, payload.position.y)
        },
        redraw(state) {
            state.redraw++
        }
    },
});