"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Plus } from "lucide-react"

// This type defines the structure of each image in the gallery
type GalleryImage = {
    id: string
    src: string
    alt: string
}

// Sample gallery images - replace with your actual images
const defaultImages: GalleryImage[] = [
    {
        id: "1",
        src: "/gallery1.jpg",
        alt: "Gallery image 1",
    },
    {
        id: "2",
        src: "/gallery2.jpg",
        alt: "Gallery image 2",
    },
    {
        id: "3",
        src: "/gallery3.jpg",
        alt: "Gallery image 3",
    },
    {
        id: "4",
        src: "/gallery4.jpg",
        alt: "Gallery image 4",
    },
    {
        id: "5",
        src: "/gallery5.jpg",
        alt: "Gallery image 5",
    },
    {
        id: "6",
        src: "/gallery6.jpg",
        alt: "Gallery image 6",
    },
    {
        id: "7",
        src: "/gallery7.jpg",
        alt: "Gallery image 7",
    },
    ]

export default function Gallery({
    images = defaultImages,
    title = "Galeria",
    subtitle = "Confira alguns dos nossos melhores momentos",
    }: {
    images?: GalleryImage[]
    title?: string
    subtitle?: string
    }) {
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
    const [showAllImages, setShowAllImages] = useState(false)

    // Only show the first 3 images in the preview
    const previewImages = images.slice(0, 3)
    const remainingCount = images.length - 3

    const handleThirdImageClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setShowAllImages(true)
    }

    const handleImageClick = (image: GalleryImage, index: number) => {
        if (index === 2 && !showAllImages) {
        setShowAllImages(true)
        } else {
        setSelectedImage(image)
        }
    }

    const closeGallery = () => {
        setShowAllImages(false)
        setSelectedImage(null)
    }

    return (
        <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">{subtitle}</p>
            </div>

            {/* Preview Gallery - Only 3 images */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {previewImages.map((image, index) => (
                <div
                key={image.id}
                className="overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer"
                onClick={() => handleImageClick(image, index)}
                >
                <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw, 33vw"
                    />

                    {/* Overlay for the third image */}
                    {index === 2 && remainingCount > 0 && (
                    <div
                        className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white transition-opacity hover:bg-black/70"
                        onClick={handleThirdImageClick}
                    >
                        <Plus className="w-10 h-10 mb-2" />
                        <p className="text-xl font-bold">Ver mais {remainingCount}</p>
                        <p className="text-sm">Clique para ver todas as imagens</p>
                    </div>
                    )}
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* Full Gallery Dialog */}
        <Dialog open={showAllImages} onOpenChange={(open) => !open && closeGallery()}>
            <DialogContent className="max-w-6xl p-6 bg-white">
            <h3 className="text-2xl font-bold mb-4">Galeria Completa</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[70vh] overflow-y-auto p-1">
                {images.map((image) => (
                <div
                    key={image.id}
                    className="overflow-hidden rounded-lg shadow-sm hover:shadow-md cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                >
                    <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    />
                    </div>
                </div>
                ))}
            </div>
            </DialogContent>
        </Dialog>

        {/* Individual Image Lightbox */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
            {selectedImage && (
                <div className="relative w-full h-[80vh]">
                <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                />
                </div>
            )}
            </DialogContent>
        </Dialog>
        </section>
    )
}

