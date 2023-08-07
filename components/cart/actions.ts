'use server';

import { addToCart, createCart, getCart, removeFromCart, updateCart } from 'lib/bigcommerce';
import { TAGS } from 'lib/constants';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

<<<<<<< HEAD
export async function addItem(prevState: any, selectedVariantId: string | undefined) {
  let cartId = cookies().get('cartId')?.value;
  let cart;
=======
export const addItem = async (
  isBigCommerceAPI: boolean,
  productId: string,
  variantId: string | undefined
): Promise<Error | string> => {
  const cartId = cookies().get('cartId')?.value;
>>>>>>> 4ee61e1 (clear cart id cookie on removing last item)

  if (cartId) {
    cart = await getCart(cartId);
  }

  if (!cartId || !cart) {
    cart = await createCart();
    cartId = cart.id;
    cookies().set('cartId', cartId);
  }

  if (!selectedVariantId) {
    return 'Missing product variant ID';
  }

  try {
    await addToCart(cartId, [{ merchandiseId: selectedVariantId, quantity: 1 }]);
    revalidateTag(TAGS.cart);
  } catch (e) {
    return 'Error adding item to cart';
  }
}

export async function removeItem(prevState: any, lineId: string) {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }

  try {
<<<<<<< HEAD
    await removeFromCart(cartId, [lineId]);
    revalidateTag(TAGS.cart);
=======
    const response = await removeFromCart(cartId, [lineId]);

    if (!response && cartId) {
      cookies().delete('cartId');
    }
>>>>>>> 4ee61e1 (clear cart id cookie on removing last item)
  } catch (e) {
    return 'Error removing item from cart';
  }
}

export async function updateItemQuantity(
  prevState: any,
  payload: {
    lineId: string;
    productSlug: string;
    variantId: string;
    quantity: number;
  }
) {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }

  const { lineId, productSlug, variantId, quantity } = payload;

  try {
    if (quantity === 0) {
      await removeFromCart(cartId, [lineId]);
      revalidateTag(TAGS.cart);
      return;
    }

    await updateCart(cartId, [
      {
        id: lineId,
        merchandiseId: variantId,
        quantity,
        productSlug
      }
    ]);
    revalidateTag(TAGS.cart);
  } catch (e) {
    return 'Error updating item quantity';
  }
}
