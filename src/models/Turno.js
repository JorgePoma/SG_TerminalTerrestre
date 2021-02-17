import {
    Schema,
    model
} from 'mongoose'
const Turno = new Schema({
    hora: {
        type: Number,
        required: true
    },
    minuto: {
        type: Number,
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    },
    frecuencia: {
        ref: "frecuencia",
        type: Schema.Types.ObjectId
    },
    unidad: {
        ref: "unidad",
        type: Schema.Types.ObjectId
    },
}, {
    timestamps: true,
    versionKey: false
});
module.exports = model('Turno', Turno);