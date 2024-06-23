import { windows } from '../../../../../../../shared/src/engine/data/windows.mjs'
import { buckets } from '../../../buckets.mjs'
import { effect } from '../../../effect.mjs'
import { particle } from '../../../particle.mjs'
import { skin } from '../../../skin.mjs'
import { archetypes } from '../../index.mjs'
import { FlatNote } from './FlatNote.mjs'

export class CriticalTapNote extends FlatNote {
    sprites = {
        left: skin.sprites.criticalNoteLeft,
        middle: skin.sprites.criticalNoteMiddle,
        right: skin.sprites.criticalNoteRight,
        fallback: skin.sprites.criticalNoteFallback,
    }

    clips = {
        perfect: effect.clips.criticalTap,
        fallback: effect.clips.normalPerfect,
    }

    effects = {
        circular: particle.effects.criticalNoteCircular,
        linear: particle.effects.criticalNoteLinear,
    }

    laneEffects = {
        lane: particle.effects.criticalTapLane,
        laneFallback: particle.effects.lane,
    }

    windows = windows.tapNote.critical

    bucket = buckets.criticalTapNote

    get slotEffect() {
        return archetypes.CriticalSlotEffect
    }

    get slotGlowEffect() {
        return archetypes.CriticalSlotGlowEffect
    }
}
