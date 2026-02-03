export interface EditSubscriptionRequest {
    refundAmount?: number
    subscriptionId: string
    action: 'cancel'
}