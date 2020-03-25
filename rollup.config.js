import {terser} from 'rollup-plugin-terser';
import resolve from "rollup-plugin-node-resolve";
import buble from 'rollup-plugin-buble';

const config = (file, plugins) => ({
    input: 'index.js',
    output: {
        name: 'Supermulticluster',
        format: 'umd',
        indent: false,
        file
    },
    plugins
});

const bubleConfig = {transforms: {dangerousForOf: true}};

export default [
    config('dist/supermulticluster.js', [resolve(), buble(bubleConfig)]),
    config('dist/supermulticluster.min.js', [resolve(), terser(), buble(bubleConfig)])
];
