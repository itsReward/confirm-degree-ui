import { useState, useEffect, useRef } from 'react';

export const useWebSocket = (url, options = {}) => {
  const [socket, setSocket] = useState(null);
  const [lastMessage, setLastMessage] = useState(null);
  const [readyState, setReadyState] = useState(0);
  const reconnectTimeoutRef = useRef();

  useEffect(() => {
    if (!url) return;

    const connect = () => {
      try {
        const ws = new WebSocket(url);

        ws.onopen = () => {
          setReadyState(1);
          if (options.onOpen) options.onOpen();
        };

        ws.onmessage = (event) => {
          const data = JSON.parse(event.data);
          setLastMessage(data);
          if (options.onMessage) options.onMessage(data);
        };

        ws.onclose = () => {
          setReadyState(3);
          if (options.onClose) options.onClose();

          // Auto-reconnect
          if (options.shouldReconnect !== false) {
            reconnectTimeoutRef.current = setTimeout(connect, 3000);
          }
        };

        ws.onerror = (error) => {
          setReadyState(3);
          if (options.onError) options.onError(error);
        };

        setSocket(ws);
      } catch (error) {
        console.error('WebSocket connection error:', error);
      }
    };

    connect();

    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (socket) {
        socket.close();
      }
    };
  }, [url]);

  const sendMessage = (message) => {
    if (socket && readyState === 1) {
      socket.send(JSON.stringify(message));
    }
  };

  return { socket, lastMessage, readyState, sendMessage };
};

export default useWebSocket;
