from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

def get_main(request):
    template = loader.get_template('index.html')
    
    img_stats_prob = [
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbD9AxEUvEtHsPIV54ykU4kj7KEKfhenoBMKIztuV6J7N6z2WVUds3qHHb2DSSz_3WK2f1rxaiwwAL2vfs7eEyLnxaetbc2vTQ=s1600-rw-v1',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYH8JuI_R5oeIGFH9CLvUrnpmpwDAAXhhnOdsyHNMz-La2Cm5rcBdQ_6ykqRexKXhvIRBJxPakvZS3sQk1NgPFXguCrsIKNBWY=s1600-rw-v1',
    ]

    img_db = [
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZaCH72EFrdN9pM7zy_gSj347aCXbgMa0hJR-v36vRoHpwSva6k4-bMq4Nzsdyy3Y5WEU7HSji9a8cOBsPepm4lTSPIFcnBmaE=s1600-rw-v1',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaMOzJLbjGh-_l4NbTNJGVkq41xM_Cny6r9S6rDpP28vuOg6u2giHDUu0cxdg0E1UFWqAyb0xW3E-uYRqWn87vL_3EWyWDS7S0=s1600-rw-v1',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaLISBx5L1iX-inm9q-PSjUAk10QVud9ohRzpQKxtnc8eEql_eir1TQ-MNszxnNWTaiMiPbakGntnDQlsxfJEEi0bU5zK1HqBQ=s1600-rw-v1',
    ]
    
    img_bi = [
        'https://images.credly.com/size/340x340/images/cbe961ef-3536-47a1-be43-14c461a3216e/image.png',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYnxS3f-rg4cEks6AaGan4t7vF74PpvsXY40HxOiDGPSeTNiSKIN14CO72ckJOJXbmEPXQ8AaLQx2ZA71cGlhIvyAWj1q9GIw=s1600-rw-v1',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZQTr68qTe_fqx2qh_GA57MwKPXCEuhPv1kkNdo_6Y87Zi98q2-OBvVUg_jZJcbC4sieraFnr1Lx4kOT2AOVCk-L21vzYn9Sg=s1600-rw-v1',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZShEbT6uyo-VQqZ6o3lp__z5AjExRtQqr7C0o2cP0dKOA7jXfLHUKzPonO3IWo5R0sqpJqkuQUXWTUZuctbTt_sz3YkPrUSdg=s1600-rw-v1',
        'https://images.credly.com/size/340x340/images/c6f4a830-11d9-46ba-a061-8ac2e5a099e9/Explore_Emerging_Tech.png',
    ]
    
    img_data_analytics = [
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaALZp017QzTaEuAMyn5dL5Da-NQ4DcC5ogukx9STOMWZ6UB7NlLQ6A8Y-avXAw0x50Y2k3ya7wUyBO5sVDSm1MH9Ewo88fRAU=s1600-rw-v1',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbQq2L0JcIgNmKDNWbZEMIdGiHt6r5OSdLapwvwEDChx3_aLuM6lO4q40R3tLBiJTta7qvPTFKchFGUos9-nmGc6Hk4hgcbMhs=s1600-rw-v1',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbr6VBLeD-ybqyM6g79lZILvZOUhApGyxPIBrMeskuCEGDPcvBlYTOaxQ-QDJ20UEg8K_Wmxr_85m95yeEITcWc2_3JQ8bEl1Q=s1600-rw-v1'
    ]
    img_data_science = [
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaQ-AgEC48dr7dWj82TOjJwQVUaqAZdbXp_hW4Ez4bPLDzObP2aGaqHpimxg-t83lfZrtaudkxRcpPWfffvYx87ebM5C6z8Y1U=s1600-rw-v1',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZJCBPLI5x4SHsvfFivis0JaCRZWLv3ydAREEh2czsx1erFCwuLXB2YP-q1Z0WTV1h5_cEt4qq9fpibLG3MuIRqwtTF3ttNazw=s1600-rw-v1',
        'https://drive.google.com/file/d/1ofJaec38EH-T69LHx5x2cMHmKwbewJPX/view',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZTzdvQ62KwDRuitdewoHIKAIOHcF0RkPSONydhhKv1SWo3tVdsKHzMRz35_BPcl8p5j--7wbpuCU7DCXwwoPJeMkg_s4yOebI=s1600-rw-v1',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYWRTU2A2F2QEZiUpV9K6KYxaew_c5nfKAlMb9nLSaV8jzCRtlGBzJSJB9BXCxBx5vgyrtlR7z0-YHAkEr7phjz8pM4M-S3nw=s1600-rw-v1',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYOqC564xDhzacLbOTxv5LAbPV_I63y7Ht353RjhB7rxp_w-JNsJMnw9tQTcCHGua32bzJgJgVdfqCgqrYh-wWejzZC1BDKtgA=s1600-rw-v1',
        'https://images.credly.com/size/340x340/images/b38a42e0-dc58-4ce2-b6c0-28d978e8aaad/image.png',
    ]

    img_cloud = [
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZ-U7DHwEltOOFAE1YPEyy-vB40qwVoAELfl7TB60KdJNFt2BF7ACxInkJsceY22Mee-NdqkwzxFhqqzlAexdvWtyU0jQ6xL28=s1600-rw-v1',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZETrp_a82Ts5ZKjFyZoldmiPiE8aqFecUh5cip0DYZTNdUuh2y7fQuA9vK_3ZE_WYRSW7Bnc0DcwPDpipCWJljHQozwwSkZyE=s1600-rw-v1',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihahesMhXN8TEIz0sndQdef2CKmkhVhcmdpeW79rualgQ5Xc01bt-a9VJLmQuKC3wf2_J5yGxeEyQMjxGH-FJEI-IoPw48NoKPY=s1600-rw-v1',
    ]

    context = {
        'img_bi': img_bi,
        'img_stats_prob': img_stats_prob,
        'img_db': img_db,
        'img_data_analytics': img_data_analytics,
        'img_data_science': img_data_science,
        'img_cloud': img_cloud,
    }

    return HttpResponse(template.render(context, request))