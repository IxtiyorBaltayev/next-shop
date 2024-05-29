"use client";

import CustomImage from "@/components/image";
import { ProductType } from "@/interface";
import { Dialog } from "@headlessui/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const ProductDetailedPage = () => {
	const [loading, setLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(true);
	const [product, setProduct] = useState<ProductType>();
	const router = useRouter();

	const { id } = useParams();
	useEffect(() => {
		async function getData() {
			setLoading(true);
			const res = await fetch(`https://fakestoreapi.com/products/${id}`);
			const product = await res.json();
			setProduct(product);
			setLoading(false);
		}
		getData();
	}, [id]);

	function closeModal() {
		setIsOpen(false);
		router.back();
	}

	return (
		<Dialog open={isOpen} onClose={closeModal} className="relative z-50">
			<div className="fixed inset-0 bg-black/30" aria-hidden="true" />
			<div className="fixed inset-0 overflow-y-auto">
				<div className="flex min-h-full items-center justify-center p-4">
					<Dialog.Panel className={"mx-auto max-w-3xl rounded bg-white p-10"}>
						{loading ? (
							<div className="h-8 w-8 rounded-full border-2 border-dotted border-blue-600 animate-spin"></div>
						) : (
							<div className="flex gap-x-8 h-96">
								{product?.image && (
									<div className="relative w-72 h-full hidden md:inline">
										<CustomImage product={product} fill />
									</div>
								)}
								<div className="flex flex-1 flex-col">
									<div className="flex-1">
										<h4 className="font-semibold">{product?.title}</h4>
										<p className="font-medium text-sm">${product?.price}</p>
										<div className="flex items-center text-sm my-4">
											<p>{product?.rating.rate}</p>
											{product?.rating.rate && (
												<div className="flex items-center ml-2 mr-6">
													{Array.from({ length: Math.floor(product.rating.rate) }, (_, i) => (
														<StarIcon key={i} className="h-4 w-4 text-yellow-500" />
													))}
													{Array.from({ length: 5 - Math.floor(product.rating.rate) }, (_, i) => (
														<StarIconOutline key={i} className="h-4 w-4 text-yellow-500" />
													))}
												</div>
											)}
											<p className="text-blue-600 font-medium hover:underline cursor-pointer text-xs">
												See all {product?.rating.count} reviews
											</p>
										</div>
										<p className="line-clamp-5 text-sm font-medium text-gray-500">{product?.description}</p>
									</div>
									<div className=" space-y-3 text-sm">
										<button className="w-full font-medium border transition duration-200 rounded bg-indigo-600 text-white border-transparent hover:border-indigo-600 hover:bg-transparent hover:text-black p-3 cursor-pointer ">
											Add to bag
										</button>
										<button
											onClick={() => window.location.reload()}
											className="w-full font-medium border transition duration-200 rounded bg-transparent text-black border-indigo-600 hover:border-transparent hover:bg-indigo-600 hover:text-white p-3 cursor-pointer ">
											View full details
										</button>
									</div>
								</div>
							</div>
						)}
					</Dialog.Panel>
				</div>
			</div>
		</Dialog>
	);
};
export default ProductDetailedPage;
