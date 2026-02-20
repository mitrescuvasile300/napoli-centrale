"use client";

import { useState } from "react";
import { useCart } from "../components/CartContext";
import { useRouter } from "next/navigation";
import { Check, Loader2 } from "lucide-react";

interface OrderData {
  customer: {
    name: string;
    phone: string;
    email: string;
  };
  address: {
    street: string;
    number: string;
    city: string;
    notes: string;
  };
  paymentMethod: "cash" | "card";
}

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");

  const [formData, setFormData] = useState<OrderData>({
    customer: {
      name: "",
      phone: "",
      email: "",
    },
    address: {
      street: "",
      number: "",
      city: "Cluj-Napoca",
      notes: "",
    },
    paymentMethod: "cash",
  });

  const deliveryFee = totalPrice >= 100 ? 0 : 10;
  const total = totalPrice + deliveryFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    const newOrderId = `NC${Date.now().toString(36).toUpperCase()}`;
    setOrderId(newOrderId);
    setIsSuccess(true);
    clearCart();
  };

  if (items.length === 0 && !isSuccess) {
    router.push("/meniu");
    return null;
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-md p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Comandă plasată cu succes!</h1>
            <p className="text-gray-600 mb-2">Numărul comenzii tale:</p>
            <p className="text-2xl font-bold text-red-600 mb-6">{orderId}</p>
            <p className="text-gray-600 mb-8">
              Te vom contacta în curând pentru confirmare. Mulțumim că ai ales Napoli Centrale!
            </p>
            <a
              href="/"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
            >
              Înapoi la pagina principală
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Finalizează comanda</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Info */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Date personale</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.customer.name}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        customer: { ...prev.customer, name: e.target.value }
                      }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Ion Popescu"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.customer.phone}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        customer: { ...prev.customer, phone: e.target.value }
                      }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="07xx xxx xxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.customer.email}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        customer: { ...prev.customer, email: e.target.value }
                      }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="ion@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Adresă livrare</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Stradă *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address.street}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          address: { ...prev.address, street: e.target.value }
                        }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Strada Napoli"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Număr *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address.number}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          address: { ...prev.address, number: e.target.value }
                        }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="10"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Oraș *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address.city}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        address: { ...prev.address, city: e.target.value }
                      }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Observații
                    </label>
                    <textarea
                      rows={3}
                      value={formData.address.notes}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        address: { ...prev.address, notes: e.target.value }
                      }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Apartament, etaj, cod interfon, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Metodă de plată</h2>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={() => setFormData(prev => ({ ...prev, paymentMethod: "cash" }))}
                      className="h-4 w-4 text-red-600"
                    />
                    <span className="ml-3">💵 Cash la livrare</span>
                  </label>
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={() => setFormData(prev => ({ ...prev, paymentMethod: "card" }))}
                      className="h-4 w-4 text-red-600"
                    />
                    <span className="ml-3">💳 Card la livrare</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Se procesează...
                  </>
                ) : (
                  `Plasează comanda - ${total.toFixed(2)} lei`
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Sumar comandă</h2>
              
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.quantity}x {item.name}
                    </span>
                    <span className="font-medium">{(item.price * item.quantity).toFixed(2)} lei</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{totalPrice.toFixed(2)} lei</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Livrare</span>
                  <span>{deliveryFee === 0 ? "Gratis" : `${deliveryFee} lei`}</span>
                </div>
                <div className="border-t pt-2 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-red-600">{total.toFixed(2)} lei</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
