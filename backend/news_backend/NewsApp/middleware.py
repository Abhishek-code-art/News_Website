import logging

class CorsDebugMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        logging.debug("CORS headers: %s", response.get('Access-Control-Allow-Origin'))
        return response
