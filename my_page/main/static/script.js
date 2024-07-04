var_analisis_de_datos = ["https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbr6VBLeD-ybqyM6g79lZILvZOUhApGyxPIBrMeskuCEGDPcvBlYTOaxQ-QDJ20UEg8K_Wmxr_85m95yeEITcWc2_3JQ8bEl1Q=s1600-rw-v1"]
var_ciencia_de_datos = ["https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZTzdvQ62KwDRuitdewoHIKAIOHcF0RkPSONydhhKv1SWo3tVdsKHzMRz35_BPcl8p5j--7wbpuCU7DCXwwoPJeMkg_s4yOebI=s1600-rw-v1"]
var_databases = []
var_bi = []
var_cloud = []
var_others = []

document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.querySelector('.image-container');

    imageContainer.addEventListener('click', function() {
        // Cambiar dinámicamente el tamaño del contenedor al hacer clic
        if (imageContainer.classList.contains('expanded')) {
            imageContainer.classList.remove('expanded');
            imageContainer.style.width = '200px'; // Tamaño inicial
            imageContainer.style.height = '200px'; // Tamaño inicial
        } else {
            imageContainer.classList.add('expanded');
            imageContainer.style.width = '400px'; // Tamaño ampliado
            imageContainer.style.height = '400px'; // Tamaño ampliado
        }
    });
});

